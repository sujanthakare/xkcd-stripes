import { useState } from 'react';
import { useLatestComic } from '@/data/useLatestComic';
import { useLocalStorageState } from '@/react-ui/hooks/useLocalStorageState';

type ListRenderConfigInputs = {
  initialPageSize?: number;
};

const range = (from: number, to: number): number[] =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i).sort(
    (a, b) => b - a,
  );

export function useListRenderConfig(input: ListRenderConfigInputs = {}) {
  const { initialPageSize = 6 } = input;

  const latestComic = useLatestComic();

  const totalComics = latestComic.data?.num ?? 0;

  const [currentPage, setCurrentPage] = useLocalStorageState<number>(
    'currentPage',
    1,
  );

  const [pageSize, setPageSize] = useState(initialPageSize);

  const from = Math.max(totalComics - currentPage * pageSize + 1, 1);
  const to = totalComics - (currentPage - 1) * pageSize;

  return {
    pageSize,
    currentPage,
    setCurrentPage,
    setPageSize,
    totalComics,
    comicsToRender: range(from, to),
    isLoading: latestComic.isLoading,
    isError: latestComic.isError,
  };
}
