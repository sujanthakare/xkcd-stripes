import { Box } from '@/react-ui/box';
import { Button } from '@/react-ui/button';
import { StyledLink } from '@/react-ui/styled-link';

type NavActionsProps = {
  num: number;
};

export function NavActions(props: NavActionsProps) {
  const { num } = props;

  return (
    <Box
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
        <Button as={StyledLink} to={`/details/${num + 1}`}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
