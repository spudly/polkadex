// types generated using quicktype.io, then modified to suit my needs

export type SlimResource = {
  name: string;
  url: string;
};

export type Ability = {
  ability: SlimResource;
  is_hidden: boolean;
  slot: number;
};

export type GameIndex = {
  game_index: number;
  version: SlimResource;
};

export type VersionDetail = {
  rarity: number;
  version: SlimResource;
};

export type HeldItem = {
  item: SlimResource;
  version_details: VersionDetail[];
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: SlimResource;
  version_group: SlimResource;
};

export type Move = {
  move: SlimResource;
  version_group_details: VersionGroupDetail[];
};

export type Sprites = {[key: string]: string | Sprites | null};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: SlimResource;
};

export type Type = {
  slot: number;
  type: SlimResource;
};

export type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  forms: SlimResource[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: SlimResource;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type SlimEvolutionChainResource = {
  url: string;
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: SlimResource;
  version: SlimResource;
};

export type FormDescription = {
  description: string;
  language: SlimResource;
};

export type Genus = {
  genus: string;
  language: SlimResource;
};

export type Name = {
  language: SlimResource;
  name: string;
};

export type PalParkEncounter = {
  area: SlimResource;
  base_score: number;
  rate: number;
};

export type PokedexNumber = {
  entry_number: number;
  pokedex: SlimResource;
};

export type Variety = {
  is_default: boolean;
  pokemon: SlimResource;
};

export type Species = {
  base_happiness: number;
  capture_rate: number;
  color: SlimResource;
  egg_groups: SlimResource[];
  evolution_chain: SlimEvolutionChainResource;
  evolves_from_species: SlimResource;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: SlimResource;
  growth_rate: SlimResource;
  habitat: null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: SlimResource;
  varieties: Variety[];
};

export type EvolutionDetail = {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: SlimResource;
  turn_upside_down: boolean;
};

export type Chain = {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: SlimResource;
};

export type EvolutionChain = {
  baby_trigger_item: null;
  chain: Chain;
  id: number;
};
