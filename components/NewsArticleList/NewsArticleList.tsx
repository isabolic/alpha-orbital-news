import { useNewsArticle } from "@hooks";
import { styled } from "@stitches/react";
import { CategoryType } from "@utils";
import { NewsArticleCard } from "./NewsArticleCard";
import { NewsSearchBar } from "./NewsSearchBar";

const Section = styled("section", {
  width: "50%",
});

interface NewsArticleListProps {
  categoryType?: CategoryType;
  query?: string;
}

const NewsArticleList = ({ categoryType, query }: NewsArticleListProps) => {
  const { data, isLoading } = useNewsArticle({
    categoryType,
    query,
  });

  if (isLoading) return <div>Loading</div>;

  return (
    <Section>
      <NewsSearchBar value={query} />
      {data?.map((article, idx) => (
        <NewsArticleCard
          key={idx}
          thumbnail={article.post_thumbnail}
          date={article.date}
          slug={article.slug}
          title={article.title}
          excerpt={article.excerpt}
        />
      ))}
    </Section>
  );
};

export { NewsArticleList };
