import { useLocalStorageState } from '@/react-ui/hooks/useLocalStorageState';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorageState<number[]>(
    'bookmarks',
    [],
  );

  const addBookmark = (num: number) => {
    const newBookmarks = [...bookmarks, num];
    setBookmarks(newBookmarks);
  };

  const removeBookmark = (num: number) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark !== num);
    setBookmarks(newBookmarks);
  };

  return {
    bookmarks,
    addBookmark,
    removeBookmark,
  };
}
