import { useQuery } from '@tanstack/react-query';

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i);

export function useGetComics(from?: number, to?: number) {
  const { data, isLoading } = useQuery({
    enabled: Boolean(from && to),
    queryKey: ['comics', from, to],
    queryFn: async () => {
      if (!from || !to) {
        return [];
      }

      const promises = [];

      for (const item of range(from, to)) {
        promises.push(
          fetch(`/xkcd/${item}/info.0.json`).then((response) =>
            response.json(),
          ),
        );
      }

      return await Promise.all(promises);
    },
  });

  return {
    data: data?.sort((left, right) => right.num - left.num),
    isLoading,
  };
}
