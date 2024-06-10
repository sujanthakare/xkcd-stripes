import { useGetComic } from '@/data/useGetComic';
import { Card, CardBody, CardHeader } from '@/react-ui/card';
import { Skeleton } from '@/react-ui/skeleton';
import { LazyImage } from '@/react-ui/lazy-image';
import { StyledLink } from '@/react-ui/styled-link';

type ComicThumbnailProps = {
  num: number;
};

export function ComicThumbnail(props: ComicThumbnailProps) {
  const { num } = props;
  const { data, isLoading, isError } = useGetComic(num);

  return (
    <StyledLink to={`/details/${num}`}>
      <Card width="20rem" height="16rem">
        <CardHeader>
          <h3>
            {num} : {data?.safe_title}
          </h3>
        </CardHeader>
        <CardBody padding="lg">
          {isLoading && <Skeleton />}
          {isError && <div>Error loading comic</div>}
          {data && (
            <LazyImage src={data.img} alt={data.alt} objectFit="cover" />
          )}
        </CardBody>
      </Card>
    </StyledLink>
  );
}
