import { ComicDetails } from '@/components/comic-details';
import { useParams } from 'react-router-dom';

export function Details() {
  const { num } = useParams<{ num: string }>();

  if (!num) {
    return <div>Comic not found</div>;
  }

  return <ComicDetails num={num} />;
}
