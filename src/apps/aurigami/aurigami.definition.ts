import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const AURIGAMI_DEFINITION = appDefinition({
  id: 'aurigami',
  name: 'aurigami',
  description: 'Aurigami is a decentralized non-custodial money market protocol on Aurora. ',
  url: 'https://app.aurigami.finance/',
  groups: {},
  tags: [AppTag.COLLATERALIZED_DEBT_POSITION],
  keywords: [],
  links: {},

  supportedNetworks: {
    [Network.AURORA_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(AURIGAMI_DEFINITION.id)
export class AurigamiAppDefinition extends AppDefinition {
  constructor() {
    super(AURIGAMI_DEFINITION);
  }
}

export default AURIGAMI_DEFINITION;
