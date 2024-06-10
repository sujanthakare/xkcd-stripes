import { useState } from 'react';
import { useLatestComic } from '@/data/useLatestComic';
import { useLocalStorageState } from '@/react-ui/hooks/useLocalStorageState';
import { calculateRenderConfigs } from './utils';

type ListRenderConfigInputs = {
  initialPageSize?: number;
};

export function useListRenderConfig(input: ListRenderConfigInputs = {}) {
  const { initialPageSize = 6 } = input;

  const latestComic = useLatestComic();
  const [currentPage, setCurrentPage] = useLocalStorageState<number>(
    'currentPage',
    1,
  );

  const [pageSize, setPageSize] = useState(initialPageSize);

  const { comicsToRender, totalComics } = calculateRenderConfigs({
    latestComicData: latestComic.data,
    currentPage,
    pageSize,
  });

  return {
    pageSize,
    currentPage,
    setCurrentPage,
    setPageSize,
    totalComics,
    comicsToRender,
    isLoading: latestComic.isLoading,
    isError: latestComic.isError,
  };
}
