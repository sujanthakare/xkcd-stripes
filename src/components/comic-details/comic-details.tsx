import { useComicDetails } from './useComicDetails';

type ComicDetailsProps = {
  num: string;
};

export function ComicDetails(props: ComicDetailsProps) {
  const { num } = props;
  const { data, isLoading, isError } = useComicDetails(num);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading comic</div>;
  }

  if (!data) {
    return <div>Comic not found</div>;
  }

  return (
    <div>
      {data.title}
      {data.num}
    </div>
  );
}
