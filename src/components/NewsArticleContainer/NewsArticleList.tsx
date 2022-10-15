import { NewsArticle } from "@dto";
import { NewsArticleCard } from "./NewsArticleCard";

interface NewsArticleListProps {
  articles?: NewsArticle[];
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <>
      {articles?.map((article, idx) => (
        <NewsArticleCard
          key={idx}
          thumbnail={article.post_thumbnail}
          date={article.date}
          slug={article.slug}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}
    </>
  );
};

export { NewsArticleList };
