import { Box } from '@/react-ui/box';
import { Card, CardBody, CardHeader } from '@/react-ui/card';
import { useGetComic } from '@/data/useGetComic';

import { LazyImage } from '@/react-ui/lazy-image';
import { Skeleton } from '@/react-ui/skeleton';
import { Container } from '@/react-ui/container';
import { BookmarkButton } from '@/components/bookmark-button';

import { NavActions } from './nav-actions';

type ComicDetailsProps = {
  num: number;
};

export function ComicDetails(props: ComicDetailsProps) {
  const { num } = props;
  const { data, isLoading, isError } = useGetComic(num);

  if (isError) {
    return <div role="alert">Error loading comic</div>;
  }

  return (
    <Container display="flex" flexDirection="column">
      <NavActions num={num} />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        gap="xl"
        padding="md"
        aria-labelledby="comic-title"
      >
        <h1 id="comic-title">
          {num} : {data?.safe_title}
        </h1>

        <Card padding="xl">
          <CardBody height="28rem" position="relative" aria-busy={isLoading}>
            {isLoading && <Skeleton aria-label="Loading comic image" />}
            {data && (
              <LazyImage src={data.img} alt={data.alt} objectFit="contain" />
            )}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <h3>Alt</h3>
          </CardHeader>
          <CardBody padding="xl" minHeight="2rem" aria-busy={isLoading}>
            {isLoading && <Skeleton aria-label="Loading comic alt text" />}
            {data && <p>{data.alt}</p>}
          </CardBody>
        </Card>

        {data?.news && (
          <Card>
            <CardHeader>
              <h3>News</h3>
            </CardHeader>
            <CardBody padding="xl" minHeight="2rem">
              {data.news}
            </CardBody>
          </Card>
        )}
      </Box>
      <Box
        as="footer"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        display="flex"
        position="sticky"
        bottom="0"
      >
        <BookmarkButton num={num} />
      </Box>
    </Container>
  );
}
