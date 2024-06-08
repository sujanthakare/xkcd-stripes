type PaginationProps = {
  currentPage: number;
  totalComics: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export function Pagination(props: PaginationProps) {
  const { currentPage, totalComics, pageSize, onPageChange } = props;

  const handleNextPage = () => {
    if (currentPage < totalComics / pageSize) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleStart = () => {
    onPageChange(1);
  };

  const handleEnd = () => {
    onPageChange(totalComics / pageSize);
  };

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalComics / pageSize;

  return (
    <div>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      {hasPreviousPage && (
        <button type="button" onClick={handlePreviousPage}>
          Previous
        </button>
      )}
      <h1>{currentPage}</h1>
      {hasNextPage && (
        <button type="button" onClick={handleNextPage}>
          Next
        </button>
      )}
      <button type="button" onClick={handleEnd}>
        End
      </button>
    </div>
  );
}
