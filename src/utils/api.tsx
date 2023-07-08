import {
  Pokemon,
  SlimResource,
  Species,
  EvolutionChain as $EvolutionChain,
} from './types';
import fetchJson from './fetchJson';

export const fetchAllPokemon = () =>
  fetchJson<{results: Array<SlimResource>}>(
    'https://pokeapi.co/api/v2/pokemon?limit=9999'
  );

export const fetchPokemon = (name: string) =>
  fetchJson<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name)}`
  );

export const fetchMultiplePokemon = async (names: string[]) => {
  if (names.length === 0) {
    return [];
  }
  return await Promise.all(names.map(name => fetchPokemon(name)));
};

export const fetchSpecies = (name: string) =>
  fetchJson<Species>(
    `https://pokeapi.co/api/v2/pokemon-species/${encodeURIComponent(name)}`
  );

export const fetchEvolutionChain = (url: string) =>
  fetchJson<$EvolutionChain>(url);
