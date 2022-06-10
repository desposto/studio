import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { CompoundContractFactory, CompoundSupplyTokenHelper } from '~apps/compound';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { AURIGAMI_DEFINITION } from '../aurigami.definition';
import { AurigamiContractFactory } from '../contracts';

const appId = AURIGAMI_DEFINITION.id;
const groupId = AURIGAMI_DEFINITION.groups.supply.id;
const network = Network.AURORA_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class AuroraAurigamiSupplyTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(AurigamiContractFactory) private readonly aurigamiContractFactory: AurigamiContractFactory,
    @Inject(CompoundContractFactory) private readonly compoundContractFactory: CompoundContractFactory,
    @Inject(CompoundSupplyTokenHelper) private readonly compoundSupplyTokenHelper: CompoundSupplyTokenHelper,
  ) {}

  async getPositions() {
    return this.compoundSupplyTokenHelper.getTokens({
      appId,
      groupId,
      network,
      comptrollerAddress: '0x817af6cfAF35BdC1A634d6cC94eE9e4c68369Aeb',
      getComptrollerContract: ({ address, network }) =>
        this.compoundContractFactory.compoundComptroller({ address, network }),
      getTokenContract: ({ address, network }) => this.compoundContractFactory.compoundCToken({ address, network }),
      getAllMarkets: ({ contract, multicall }) => multicall.wrap(contract).getAllMarkets(),
      getExchangeRate: ({ contract, multicall }) => multicall.wrap(contract).exchangeRateCurrent(),
      getSupplyRate: ({ contract, multicall }) => multicall.wrap(contract).supplyRatePerBlock(),
      getBorrowRate: ({ contract, multicall }) => multicall.wrap(contract).borrowRatePerBlock(),
      getUnderlyingAddress: ({ contract, multicall }) => multicall.wrap(contract).underlying(),
      getExchangeRateMantissa: ({ underlyingTokenDecimals }) => underlyingTokenDecimals + 10,
    });
  }
}
