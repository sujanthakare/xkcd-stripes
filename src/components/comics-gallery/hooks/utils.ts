import type { Comic } from '@/data/types';

type ListRenderConfigInputs = {
  latestComicData?: Comic;
  currentPage: number;
  pageSize: number;
};

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i).sort(
    (a, b) => b - a,
  );

export function calculateRenderConfigs(input: ListRenderConfigInputs) {
  const { latestComicData, currentPage, pageSize } = input;
  const totalComics = latestComicData?.num ?? 0;

  const from = Math.max(totalComics - currentPage * pageSize + 1, 1);
  const to = totalComics - (currentPage - 1) * pageSize;

  return {
    totalComics,
    comicsToRender: range(from, to),
  };
}
