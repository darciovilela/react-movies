import { Record } from './Record';

// declaracao do que sera passado na interface
export interface Actor extends Record {
  name: string;
  born: string;
  city: string;
}

// estado inicial do form vazio
export const emptyActor: Actor = {
  name: '',
  born: '',
  city: '',
};
