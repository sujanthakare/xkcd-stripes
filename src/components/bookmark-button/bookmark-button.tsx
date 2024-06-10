import { useBookmarks } from '@/data/useBookmarks';
import { Button } from '@/react-ui/button';

type BookmarkButtonProps = {
  num: number;
};

export function BookmarkButton(props: BookmarkButtonProps) {
  const { num } = props;

  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  const isBookmarked = bookmarks.includes(num);

  if (isBookmarked) {
    return (
      <Button
        color="secondary"
        onClick={() => removeBookmark(num)}
        aria-label={`Remove bookmark comic ${num}`}
      >
        Remove bookmark
      </Button>
    );
  }

  return (
    <Button
      onClick={() => addBookmark(num)}
      aria-label={`Bookmark comic ${num}`}
    >
      Add bookmark
    </Button>
  );
}
