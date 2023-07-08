import {FC} from 'react';
import {useQuery} from '@tanstack/react-query';
import {Link} from 'react-router-dom';
import {fetchMultiplePokemon} from '../utils/api';
import getFlatSprites from '../utils/getFlatSprites';

export const SearchResults: FC<{names: string[]}> = ({names}) => {
  const multiplePokemonQuery = useQuery(['multiple-pokemon', names], () =>
    fetchMultiplePokemon(names)
  );

  return (
    <div className="search-results">
      {multiplePokemonQuery.data?.map(pokemon => (
        <Link
          key={pokemon.name}
          to={`/pokemon/${encodeURIComponent(pokemon.name)}`}
        >
          <div className="tile">
            <figure>
              <img
                src={Object.values(getFlatSprites(pokemon.sprites))[0]}
                alt={pokemon.name}
                width={100}
              />
              <figcaption>{pokemon.name}</figcaption>
            </figure>
          </div>
        </Link>
      )) ?? null}
    </div>
  );
};
