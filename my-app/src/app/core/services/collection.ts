import { State } from '../../shared/enums/state.enum';
import { Item } from '../../shared/models/item.model';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'pop',
    reference: '1234',
    state: State.ALIVRER
  },
  {
    id: 'a2',
    name: 'lol',
    reference: '1235',
    state: State.ENCOURS
  },
  {
    id: 'a1',
    name: 'mom',
    reference: '1234',
    state: State.LIVREE
  }
];
