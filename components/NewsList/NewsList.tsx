import { useNews } from "@hooks";

const NewsList = () => {
  const { data, isLoading, isFetching } = useNews();

  if (isLoading) return <div>Loading</div>;

  return <section>{data?.map((article) => article.title)}</section>;
};

export { NewsList };
