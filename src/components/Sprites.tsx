import {FC} from 'react';
import {Pokemon} from '../utils/types';
import getFlatSprites from '../utils/getFlatSprites';

export const Sprites: FC<{sprites: Pokemon['sprites']; level: number}> = ({
  sprites,
}) => {
  const flatSprites = getFlatSprites(sprites);
  return (
    <div className="sprites">
      {Object.entries(flatSprites).map(([key, value]) => (
        <div key={key} className="tile">
          <img src={value} alt={key} width={96} />
        </div>
      ))}
    </div>
  );
};
