import { useQuery } from '@tanstack/react-query';
import type { Comic } from './types';

export function useLatestComic() {
  const { data, isLoading, isError } = useQuery<Comic>({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('/xkcd/info.0.json');
      return await response.json();
    },
  });

  return {
    data,
    isLoading,
    isError,
  };
}
