import { useQuery } from '@tanstack/react-query';

export function useComicDetails(num: string) {
  return useQuery({
    queryKey: ['comic-details', num],
    async queryFn() {
      const res = await fetch(`/xkcd/${num}/info.0.json`);
      return await res.json();
    },
  });
}
