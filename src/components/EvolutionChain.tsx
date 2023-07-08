import {FC} from 'react';
import {Link} from 'react-router-dom';
import {Chain} from '../utils/types';

export const EvolutionChain: FC<{chain: Chain; species: string}> = ({
  species,
  chain,
}) => (
  <div className="evolution-chain">
    {species === chain.species.name ? (
      <span className="evolution-chain-current">{species}</span>
    ) : (
      <Link to={`/pokemon/${encodeURIComponent(chain.species.name)}`}>
        {chain.species.name}
      </Link>
    )}
    {chain.evolves_to.length > 0 ? (
      <>
        <span>→</span>
        <div className="evolution-chain__evolves-to">
          {chain.evolves_to.map(child => (
            <EvolutionChain
              key={child.species.url}
              species={species}
              chain={child}
            />
          ))}
        </div>
      </>
    ) : null}
  </div>
);
