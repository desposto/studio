import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import {
  CompoundContractFactory,
  CompoundBorrowBalanceHelper,
  CompoundSupplyBalanceHelper,
  CompoundLendingMetaHelper,
  CompoundClaimableBalanceHelper,
} from '~apps/compound';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { AURIGAMI_DEFINITION } from '../aurigami.definition';
import { AurigamiContractFactory } from '../contracts';
import { AurigamiClaimableBalanceHelper } from '../helper/aurigami.claimable.balance-helper';

const network = Network.AURORA_MAINNET;
const appId = AURIGAMI_DEFINITION.id;

@Register.BalanceFetcher(AURIGAMI_DEFINITION.id, network)
export class AuroraAurigamiBalanceFetcher implements BalanceFetcher {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(AurigamiContractFactory) private readonly aurigamiContractFactory: AurigamiContractFactory,
    @Inject(CompoundContractFactory)
    private readonly compoundContractFactory: CompoundContractFactory,
    @Inject(CompoundBorrowBalanceHelper)
    private readonly compoundBorrowBalanceHelper: CompoundBorrowBalanceHelper,
    @Inject(CompoundSupplyBalanceHelper)
    private readonly compoundSupplyBalanceHelper: CompoundSupplyBalanceHelper,
    @Inject(CompoundLendingMetaHelper)
    private readonly compoundLendingMetaHelper: CompoundLendingMetaHelper,
    @Inject(CompoundClaimableBalanceHelper)
    private readonly compoundClaimableBalanceHelper: CompoundClaimableBalanceHelper,
    @Inject(AurigamiClaimableBalanceHelper)
    private readonly aurigamiClaimableBalanceHelper: AurigamiClaimableBalanceHelper,
  ) {}

  async getBorrowBalances(address: string) {
    return [];
    return this.compoundBorrowBalanceHelper.getBalances({
      address,
      appId: AURIGAMI_DEFINITION.id,
      groupId: AURIGAMI_DEFINITION.groups.borrow.id,
      network,
      getTokenContract: ({ address, network }) => this.compoundContractFactory.compoundCToken({ address, network }),
      getBorrowBalanceRaw: ({ contract, address, multicall }) =>
        multicall.wrap(contract).callStatic.borrowBalanceCurrent(address),
    });
  }

  async getSupplyBalances(address: string) {
    return [];
    return this.compoundSupplyBalanceHelper.getBalances({
      address,
      appId: AURIGAMI_DEFINITION.id,
      groupId: AURIGAMI_DEFINITION.groups.supply.id,
      network,
      getTokenContract: ({ address, network }) => this.compoundContractFactory.compoundCToken({ address, network }),
      getBalanceRaw: ({ contract, address, multicall }) => multicall.wrap(contract).balanceOf(address),
    });
  }

  async getClaimableBalances(address: string) {
    return this.aurigamiClaimableBalanceHelper.getBalances({
      address,
      appId,
      groupId: AURIGAMI_DEFINITION.groups.claimable.id,
      network,
      lensAddress: '0xffdffbdb966cb84b50e62d70105f2dbf2e0a1e70',
      rewardTokenAddress: '0x09c9d464b58d96837f8d8b6f4d9fe4ad408d3a4f',
      governanceTokenAddress: '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79',
      comptrollerAddress: '0x817af6cfaf35bdc1a634d6cc94ee9e4c68369aeb',
    });
  }

  async getBalances(address: string) {
    const [borrowBalances, supplyBalances, claimableBalances] = await Promise.all([
      this.getBorrowBalances(address),
      this.getSupplyBalances(address),
      this.getClaimableBalances(address),
    ]);

    const meta = this.compoundLendingMetaHelper.getMeta({ balances: [...supplyBalances, ...borrowBalances] });
    const claimableProduct = { label: 'Claimable', assets: claimableBalances };
    const lendingProduct = { label: 'Lending', assets: [...supplyBalances, ...borrowBalances], meta };

    return presentBalanceFetcherResponse([lendingProduct, claimableProduct]);

    return presentBalanceFetcherResponse([
      {
        label: 'Lending',
        assets: [...supplyBalances, ...borrowBalances],
        meta: meta,
      },
    ]);
  }
}
