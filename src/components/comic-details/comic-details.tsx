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
    return <div>Error loading comic</div>;
  }

  return (
    <Container display="flex" flexDirection="column" gap="xl">
      <NavActions num={num} />

      <h1>
        {num} : {data?.safe_title}
      </h1>

      <Card padding="xl">
        <CardBody height="28rem" position="relative">
          {isLoading && <Skeleton />}
          {data && (
            <LazyImage src={data.img} alt={data.alt} objectFit="contain" />
          )}
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h3>Alt</h3>
        </CardHeader>
        <CardBody padding="xl" minHeight="2rem">
          {data && <p>{data.alt}</p>}
        </CardBody>
      </Card>

      <Box
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
