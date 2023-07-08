import {FC} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchPokemon, fetchSpecies, fetchEvolutionChain} from '../utils/api';
import {Sprites} from './Sprites';
import Spinner from './Spinner';
import {EvolutionChain} from './EvolutionChain';

const Pokemon: FC = () => {
  const name = useParams<{name: string}>().name!;
  const navigate = useNavigate();

  const pokemonQuery = useQuery(['pokemon', name], () => fetchPokemon(name));
  const speciesQuery = useQuery(
    ['species', pokemonQuery.data?.species.name],
    () => fetchSpecies(pokemonQuery.data!.species.name),
    {enabled: pokemonQuery.data != null}
  );
  const evolutionChainQuery = useQuery(
    ['evolution-chain', speciesQuery.data?.evolution_chain.url],
    () => fetchEvolutionChain(speciesQuery.data!.evolution_chain.url),
    {enabled: speciesQuery.data != null}
  );

  if (pokemonQuery.isError) {
    return <>Failed to load pokemeon: {name}</>;
  }

  if (pokemonQuery.isLoading) {
    return <Spinner />;
  }

  const pokemon = pokemonQuery.data;

  return (
    <div>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        ← Back
      </a>
      <h1>{pokemon.name}</h1>
      <section aria-label="abilities">
        <h2>Abilities</h2>
        <ul className="list-grid">
          {pokemon.abilities.map(ability => (
            <li key={ability.ability.url}>{ability.ability.name}</li>
          ))}
        </ul>
      </section>
      <section aria-label="moves">
        <h2>Moves</h2>
        <ul className="list-grid">
          {pokemon.moves.map(move => (
            <li key={move.move.url}>{move.move.name}</li>
          ))}
        </ul>
      </section>
      <section aria-label="species">
        <h2>Species</h2>
        {pokemon.species.name}
      </section>
      <section aria-label="sprites">
        <h2>Sprites</h2>
        <Sprites sprites={pokemon.sprites} level={3} />
      </section>
      <section aria-label="types">
        <h2>Types</h2>
        <ul className="list-grid">
          {pokemon.types.map(type => (
            <li key={type.type.url}>{type.type.name}</li>
          ))}
        </ul>
      </section>
      <section aria-label="evolution-chain">
        <h2>Evolution Chain</h2>
        {evolutionChainQuery.isError ? (
          <>
            Failed to load evolution chain for species: {pokemon.species.name}
          </>
        ) : evolutionChainQuery.isLoading ? (
          <Spinner />
        ) : (
          <EvolutionChain
            species={pokemon.species.name}
            chain={evolutionChainQuery.data!.chain}
          />
        )}
      </section>
    </div>
  );
};

export default Pokemon;
