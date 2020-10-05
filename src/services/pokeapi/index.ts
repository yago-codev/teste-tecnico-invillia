import axios, { AxiosPromise } from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export interface Response<T> {
  results: T[];
  count: number;
  next: string;
  previous: string | null;
}

export interface ITypes {
  name: string;
  url: string;
}

export interface IPokemons {
  name: string;
  url: string;
  id: number;
}

export interface IDetailsPokemon {
  id: number;
  abilities: [
    {
      ability: {
        name: string;
        url: string;
      };
    },
  ];
  forms: [
    {
      name: string;
      url: string;
    },
  ];
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}

export interface IAbility {
  effect_entries: [
    {
      language: {
        name: string;
      };
      short_effect: string;
    },
  ];
  name: string;
}

export interface IForm {
  id: number;
  is_battle_only: boolean;
  is_mega: boolean;
}

export const getAllTypes: (name?: string) => AxiosPromise<Response<ITypes>> = (
  name?: string,
) => api.get(name ? `/type/${name}` : `/type`);

export const getAllPokemons: (
  name?: string,
  offset?: number,
  limit?: number,
) => AxiosPromise<Response<IPokemons>> = (
  name?: string,
  offset?: number,
  limit?: number,
) =>
  name
    ? api.get(`/pokemon/${name}`)
    : api.get(`/pokemon?offset=${offset}&limit=${limit}`);

export const getDetailsPokemon: (
  name?: IPokemons['name'],
) => AxiosPromise<IDetailsPokemon> = (name?: IPokemons['name']) =>
  api.get(`/pokemon/${name}`);

export const getAbility: (url: string) => AxiosPromise<IAbility> = (
  url: string,
) => api.get(`${url}`);

export const getForm: (url: string) => AxiosPromise<IForm> = (url: string) =>
  api.get(`${url}`);
