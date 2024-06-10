import { ComicThumbnail } from '@/components/comic-thumbnail';
import { useBookmarks } from '@/data/useBookmarks';
import { Box } from '@/react-ui/box';
import { Button } from '@/react-ui/button';
import { Container } from '@/react-ui/container';
import { StyledLink } from '@/react-ui/styled-link';

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();

  return (
    <Container>
      <header>
        <Box
          as="nav"
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
      </header>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        gap="xl"
        padding="md"
        aria-labelledby="bookmarks"
      >
        <h1 id="bookmarks">Bookmarks</h1>
        <Box display="flex" flexDirection="row" gap="xl" flexWrap="wrap">
          {bookmarks.length === 0 && (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <p>No bookmarks yet</p>
            </Box>
          )}

          {bookmarks.map((bookmark) => (
            <ComicThumbnail num={bookmark} key={bookmark} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
