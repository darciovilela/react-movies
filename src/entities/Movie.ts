import { Record } from './Record';

// declaracao do que sera passado na interface
export interface MovieFlags extends Record {
  favorite: boolean;
  latin: boolean;
  seen: boolean;
}

export interface Movie extends MovieFlags {
  id?: string;
  name: string;
  country?: string;
  about?: string;
  director?: string;
  released?: string;
  rating?: string;
}

// estado inicial do form vazio
export const emptyMovie: Movie = {
  name: '',
  about: '',
  country: '',
  director: '',
  rating: '',
  released: '',
  favorite: false,
  latin: false,
  seen: false,
};
