import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@dto";
import { CategoryType } from "../utils/categoryType";

const fetchNewsArticles = async () => {
  const response = await fetch(
    "https://www.alpha-orbital.com/last-100-news.json"
  );
  const newsArticle = await response.json();
  return newsArticle;
};

interface params {
  categoryType?: CategoryType;
  query?: string;
  refetch?: boolean;
}

const useNewsArticle = (params?: params) => {
  const { categoryType, query, refetch } = params ?? {};
  return useQuery<NewsArticle[], Error>(["news"], fetchNewsArticles, {
    select: (data) => {
      let articles = data.filter((rec) =>
        categoryType ? rec.post_category_id === categoryType : true
      );

      articles = articles.filter((rec) =>
        query ? rec.title.includes(query) : true
      );

      return articles;
    },
    enabled: !!refetch,
  });
};

export { useNewsArticle, fetchNewsArticles };
