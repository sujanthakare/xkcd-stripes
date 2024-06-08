import { useQuery } from '@tanstack/react-query';

export function useLatestComic() {
  return useQuery({
    queryKey: ['latest'],
    queryFn: async () => {
      const response = await fetch('/xkcd/info.0.json');
      return await response.json();
    },
  });
}
