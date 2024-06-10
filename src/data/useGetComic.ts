import { useQuery } from '@tanstack/react-query';
import type { Comic } from './types';

export function useGetComic(num: number) {
  return useQuery<Comic>({
    queryKey: ['comic', num],
    async queryFn() {
      const res = await fetch(`/xkcd/${num}/info.0.json`);
      return await res.json();
    },
  });
}
