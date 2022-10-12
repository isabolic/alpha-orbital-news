import { useNews } from "@hooks";
import { useRouter } from "next/router";
import { CategoryType } from "@utils";
import { NewsArticleCard } from "./NewsArticleCard";

const NewsArticleList = () => {
  const router = useRouter();
  const { filter } = router.query;
  const { data, isLoading } = useNews(filter as CategoryType | undefined);

  if (isLoading) return <div>Loading</div>;

  return (
    <section>
      {data?.map((article, idx) => (
        <NewsArticleCard
          key={idx}
          thumbnail={article.post_thumbnail}
          date={article.date}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}
    </section>
  );
};

export { NewsArticleList };
