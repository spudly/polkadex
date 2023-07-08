import {Pokemon} from './types';

const getFlatSprites = (
  sprites: Pokemon['sprites'],
  keyPrefix: string = ''
) => {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(sprites)) {
    if (typeof value === 'string') {
      result[`${keyPrefix}${key}`] = value;
    } else if (value != null) {
      Object.assign(result, getFlatSprites(value, `${key} => `));
    }
  }
  return result;
};

export default getFlatSprites;
