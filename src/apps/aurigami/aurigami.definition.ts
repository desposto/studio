import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const AURIGAMI_DEFINITION = appDefinition({
  id: 'aurigami',
  name: 'aurigami',
  description: 'Aurigami is a decentralized non-custodial money market protocol on Aurora. ',
  url: 'https://app.aurigami.finance/',
  groups: {
    supply: { id: 'supply', type: GroupType.TOKEN, label: 'Supply' },
    borrow: { id: 'borrow', type: GroupType.POSITION, label: 'Borrow' },
    claimable: { id: 'claimable', type: GroupType.POSITION, label: 'Claimable' },
    papermill: { id: 'claimable', type: GroupType.POSITION, label: 'Claimable' },
  },
  tags: [AppTag.LENDING],
  keywords: [],
  links: {
    telegram: 'https://t.me/aurigami_PLY',
    twitter: 'https://twitter.com/aurigami_PLY',
    discord: 'https://discord.com/invite/MpgHRtm8EK',
    medium: 'https://medium.com/aurigami',
  },
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
