import { Inject, Injectable } from '@nestjs/common';

import { drillBalance } from '~app-toolkit';
import { APP_TOOLKIT, IAppToolkit } from '~app-toolkit/app-toolkit.interface';
import { buildDollarDisplayItem } from '~app-toolkit/helpers/presentation/display-item.present';
import { getTokenImg } from '~app-toolkit/helpers/presentation/image.present';
import { CompoundContractFactory } from '~apps/compound';
import { ContractType } from '~position/contract.interface';
import { ContractPositionBalance } from '~position/position-balance.interface';
import { MetaType } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { AurigamiContractFactory } from '../contracts';

type CompoundBalanceHelperParams = {
  address: string;
  network: Network;
  appId: string;
  groupId: string;
  lensAddress: string;
  governanceTokenAddress: string;
  rewardTokenAddress: string;
  comptrollerAddress: string;
};

@Injectable()
export class AurigamiClaimableBalanceHelper {
  constructor(
    @Inject(CompoundContractFactory) private readonly compoundContractFactory: CompoundContractFactory,
    @Inject(AurigamiContractFactory) private readonly aurigamiContractFactory: AurigamiContractFactory,
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
  ) {}

  async getBalances({
    address,
    network,
    appId,
    groupId,
    lensAddress,
    governanceTokenAddress,
    rewardTokenAddress,
    comptrollerAddress,
  }: CompoundBalanceHelperParams) {
    const lensContract = this.aurigamiContractFactory.auLens({ address: lensAddress, network });
    const prices = await this.appToolkit.getBaseTokenPrices(network);
    // Resolve reward metadata
    const rewardMetadata = await lensContract.callStatic.claimRewards(
      '0x817af6cfAF35BdC1A634d6cC94eE9e4c68369Aeb',
      '0xC9A848AC73e378516B16E4EeBBa5ef6aFbC0BBc2',
      [],
      { from: address },
    );

    // Calculate claimable COMP rewards
    const governanceToken = prices.find(price => price.address === governanceTokenAddress);
    if (!governanceToken) return [];

    const rewardToken = prices.find(price => price.address === rewardTokenAddress);
    if (!rewardToken) return [];

    // console.log('aurora', rewardMetadata.auroraClaimable.div(10 ** rewardToken.decimals).toString());
    // console.log('ply', rewardMetadata.plyAccrured.div(10 ** governanceToken.decimals).toString());

    const rewardBalanceRaw = rewardMetadata[0];
    const rewardTokenWithMetaType = { metaType: MetaType.CLAIMABLE, ...rewardToken };
    const tokenBalance = drillBalance(rewardTokenWithMetaType, rewardBalanceRaw.toString());

    // Display Props
    const label = `Claimable ${rewardToken.symbol}`;
    const secondaryLabel = buildDollarDisplayItem(rewardToken.price);
    const images = [getTokenImg(rewardToken.address, network)];
    const statsItems = [];
    const displayProps = { label, secondaryLabel, images, statsItems };

    const contractPositionBalance: ContractPositionBalance = {
      type: ContractType.POSITION,
      address: comptrollerAddress,
      appId,
      groupId,
      network,
      dataProps: {},
      displayProps,
      tokens: [tokenBalance],
      balanceUSD: tokenBalance.balanceUSD,
    };

    return [contractPositionBalance];
  }
}
