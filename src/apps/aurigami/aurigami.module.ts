import { CompoundAppModule } from '/Users/davidesposto/Documents/GitHub/studio/src/apps/compound';
//need to update path

import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { AurigamiAppDefinition, AURIGAMI_DEFINITION } from './aurigami.definition';
import { AuroraAurigamiSupplyTokenFetcher } from './aurora/aurigami.supply.token-fetcher';
import { AurigamiContractFactory } from './contracts';
import { AuroraAurigamiBorrowContractPositionFetcher } from './aurora/aurigami.borrow.contract-position-fetcher';
import { AuroraAurigamiBalanceFetcher } from './aurora/aurigami.balance-fetcher';
import { AurigamiClaimableBalanceHelper } from './helper/aurigami.claimable.balance-helper';

@Register.AppModule({
  appId: AURIGAMI_DEFINITION.id,
  imports: [CompoundAppModule],
  providers: [
    AurigamiAppDefinition,
    AurigamiContractFactory,
    AuroraAurigamiBalanceFetcher,
    AuroraAurigamiBorrowContractPositionFetcher,
    AuroraAurigamiSupplyTokenFetcher,
    AurigamiClaimableBalanceHelper,
  ],
})
export class AurigamiAppModule extends AbstractApp() {}
