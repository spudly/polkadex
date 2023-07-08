import {useEffect, useState, FC} from 'react';
import {useQuery} from '@tanstack/react-query';
import {matchSorter} from 'match-sorter';
import {useDebouncedEffect} from '@react-hookz/web';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {fetchAllPokemon} from '../utils/api';
import {useTokenHistory} from '../utils/useTokenHistory';
import {SearchResults} from './SearchResults';
import Spinner from './Spinner';

const PokeSearch: FC = () => {
  const committedToken = useParams().token ?? '';
  const [token, setToken] = useState(committedToken);
  const navigate = useNavigate();

  useEffect(() => {
    setToken(committedToken);
  }, [committedToken]);

  useDebouncedEffect(
    () => navigate(`/search/${encodeURIComponent(token)}`, {replace: true}),
    [token],
    500
  );

  const pokemonQuery = useQuery(['pokemon'], fetchAllPokemon);
  const historicalTokens = useTokenHistory(committedToken);

  if (pokemonQuery.isError) {
    return <>An unexpected error occurred</>;
  }

  if (pokemonQuery.isLoading) {
    return <Spinner />;
  }

  const matches = token
    ? matchSorter(pokemonQuery.data.results, committedToken, {
        keys: ['name'],
      }).slice(0, 25)
    : pokemonQuery.data.results.filter(pokemon => pokemon.name.includes(token));

  return (
    <div className="search-container">
      <div className="search-sidebar">
        <input
          type="search"
          placeholder="Search"
          value={token}
          onChange={e => setToken(e.currentTarget.value)}
          className="search-box"
        />

        <div>
          <h2>Recent Searches:</h2>
          <ul className="list-unstyled">
            {historicalTokens?.map(historicalToken => (
              <li key={historicalToken}>
                <Link to={`/search/${encodeURIComponent(historicalToken)}`}>
                  {historicalToken}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <SearchResults names={matches.map(match => match.name)} />
      </div>
    </div>
  );
};

export default PokeSearch;
