import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetComics } from './useGetComics';
import { useLatestComic } from './useLatestComic';
import { Pagination } from './pagination';

export function ComicsGallery() {
  const latestComic = useLatestComic();
  const totalComics = latestComic.data?.num ?? 0;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);

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
    <div>
      {comics.data.map((comic) => (
        <div key={comic.num}>
          <h1>{comic.num}</h1>
          <h1>{comic.title}</h1>
          <img src={comic.img} alt={comic.alt} />
          <Link to={`/details/${comic.num}`}>Read</Link>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalComics={totalComics}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
