import { ComicThumbnail } from '@/components/comic-thumbnail';
import { useBookmarks } from '@/data/useBookmarks';
import { Box } from '@/react-ui/box';
import { Button } from '@/react-ui/button';
import { Container } from '@/react-ui/container';
import { StyledLink } from '@/react-ui/styled-link';

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <Container display="flex" flexDirection="column" gap="xl">
      <Box
        display="flex"
        flexDirection="row"
        gap="sm"
        alignItems="flex-start"
        padding="sm"
      >
        <Button as={StyledLink} to="/">
          Back to list
        </Button>
      </Box>
      <h1>Bookmarks</h1>
      <Box display="flex" flexDirection="row" gap="xl" flexWrap="wrap">
        {bookmarks.map((bookmark) => (
          <ComicThumbnail num={bookmark} key={bookmark} />
        ))}
      </Box>
    </Container>
  );
}
