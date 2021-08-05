// declaracao do que sera passado na interface
export interface MovieFlags {
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
