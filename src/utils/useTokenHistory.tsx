import {useEffect} from 'react';
import {useLocalStorageValue} from '@react-hookz/web';

export const useTokenHistory = (token: string) => {
  const {value, set} = useLocalStorageValue<Array<string>>('token-history', {
    defaultValue: [],
    initializeWithValue: true,
  });

  useEffect(() => {
    if (token) {
      set(
        (prev: Array<string> = []): Array<string> =>
          [token, ...prev.filter(t => t !== token)].slice(0, 10)
      );
    }
  }, [token]);

  return value;
};
