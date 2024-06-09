import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetComics } from './useGetComics';
import { useLatestComic } from './useLatestComic';
import { Pagination } from './pagination';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
} from '@/react-ui/card';
import { Box } from '@/react-ui/box';

export function ComicsGallery() {
  const latestComic = useLatestComic();
  const totalComics = latestComic.data?.num ?? 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);

  const from = Math.max(totalComics - currentPage * pageSize + 1, 1);
  const to = totalComics - (currentPage - 1) * pageSize;

  const comics = useGetComics(from, to);

  if (latestComic.isLoading || comics.isLoading) {
    return <div>Loading...</div>;
  }

  if (latestComic.isError || comics.isError) {
    return <div>Error loading comics</div>;
  }

  if (!latestComic.data || !comics.data) {
    return <div>No comics found</div>;
  }

  return (
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="64rem"
        height="100vh"
        gap="xl"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="xl"
        >
          {comics.data.map((comic) => (
            <Card
              flex
              flexDirection="column"
              key={comic.num}
              width="20rem"
              height="16rem"
            >
              <CardHeader>
                <h3>
                  {comic.num} : {comic.title}
                </h3>
              </CardHeader>
              <CardBody>
                <CardImage src={comic.img} alt={comic.alt} />
              </CardBody>
              <CardFooter>
                <Link to={`/details/${comic.num}`}>Read</Link>
              </CardFooter>
            </Card>
          ))}
        </Box>
        <footer>
          <Pagination
            currentPage={currentPage}
            totalComics={totalComics}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />
        </footer>
      </Box>
    </Box>
  );
}
