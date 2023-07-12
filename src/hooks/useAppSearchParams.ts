import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { getSearchWith } from '../helpers';

type HookOutput = [
  string | undefined,
  (newValue: string | null) => void,
];

export const useAppSearchParams = (
  key: string,
  defaultValue?: string,
): HookOutput => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(key) || defaultValue;

  const setValue = useCallback((newValue: string | null) => {
    const newSearchParams = getSearchWith(
      searchParams,
      { [key]: newValue },
    );

    setSearchParams(newSearchParams);
  }, []);

  return useMemo(() => [value, setValue], [value, setValue]);
};
