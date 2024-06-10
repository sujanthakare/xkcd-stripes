import { ComicDetails } from '@/components/comic-details';
import { useLatestComic } from '@/data/useLatestComic';
import { Box } from '@/react-ui/box';
import { Skeleton } from '@/react-ui/skeleton';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { num } = useParams<{ num: string }>();
  const { data, isLoading } = useLatestComic();

  if (isLoading) {
    return <Skeleton />;
  }

  const isPageNotFound =
    !num || !data || Number(num) > data.num || Number(num) < 1;

  if (isPageNotFound) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <p>Page not found</p>
      </Box>
    );
  }

  return <ComicDetails num={Number(num)} />;
}
