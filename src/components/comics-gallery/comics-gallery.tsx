import { Box } from '@/react-ui/box';

import { Skeleton } from '@/react-ui/skeleton';
import { Button } from '@/react-ui/button';
import { Container } from '@/react-ui/container';

import { useListRenderConfig } from './hooks/useListRenderConfig';
import { ComicThumbnail } from '@/components/comic-thumbnail';
import { Pagination } from '@/components/pagination';

export function ComicsGallery() {
  const {
    pageSize,
    currentPage,
    setCurrentPage,
    comicsToRender,
    isError,
    totalComics,
    isLoading,
  } = useListRenderConfig();

  if (isError) {
    return <div>Error loading comics</div>;
  }

  return (
    <Container>
      <Box display="flex" flexDirection="column" gap="xl" maxWidth="64rem">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          padding="sm"
        >
          <Button as="a" href="/bookmarks">
            Bookmarks
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          flexWrap="wrap"
          gap="xl"
        >
          {isLoading && <Skeleton />}
          {comicsToRender?.map((comicNum) => (
            <ComicThumbnail num={comicNum} key={comicNum} />
          ))}
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Pagination
            currentPage={currentPage}
            totalComics={totalComics}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />
        </Box>
      </Box>
    </Container>
  );
}
