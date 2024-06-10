import { useLatestComic } from '@/data/useLatestComic';
import { Box } from '@/react-ui/box';
import { Button } from '@/react-ui/button';
import { StyledLink } from '@/react-ui/styled-link';

type NavActionsProps = {
  num: number;
};

export function NavActions(props: NavActionsProps) {
  const { num } = props;
  const latestComic = useLatestComic();

  if (latestComic.isLoading || latestComic.isError || !latestComic.data) {
    return null;
  }

  const isLast = latestComic.data?.num === num;

  return (
    <header>
      <Box
        as="nav"
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        position="sticky"
        top="0"
        padding="sm"
      >
        <Box display="flex" flexDirection="row" gap="sm">
          <Button as={StyledLink} to="/">
            Back to list
          </Button>
          <Button as={StyledLink} to="/bookmarks">
            Bookmarks
          </Button>
        </Box>
        <Box display="flex" flexDirection="row" gap="sm">
          <Button as={StyledLink} to={`/details/${num - 1}`}>
            Previous
          </Button>
          <Button as={StyledLink} to={`/details/${num + 1}`} disabled={isLast}>
            Next
          </Button>
        </Box>
      </Box>
    </header>
  );
}
