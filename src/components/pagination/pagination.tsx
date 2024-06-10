import { Box } from '@/react-ui/box';
import { Button } from '@/react-ui/button';

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
    onPageChange(Math.ceil(totalComics / pageSize));
  };

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalComics / pageSize;

  return (
    <Box display="flex" flexDirection="row" gap="sm" alignItems="center">
      <Button type="button" onClick={handleStart}>
        Start
      </Button>

      <Button
        type="button"
        onClick={handlePreviousPage}
        disabled={!hasPreviousPage}
      >
        Previous
      </Button>

      <p>
        {currentPage} of {Math.ceil(totalComics / pageSize)}
      </p>

      <Button type="button" onClick={handleNextPage} disabled={!hasNextPage}>
        Next
      </Button>

      <Button type="button" onClick={handleEnd}>
        End
      </Button>
    </Box>
  );
}
