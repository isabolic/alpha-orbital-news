import { useQuery } from "@tanstack/react-query";
import type { NewsArticle, NewsArticleData } from "@dto";
import { CategoryType } from "../utils/categoryType";

const fetchNewsArticles = async (): Promise<NewsArticleData> => {
  const response = await fetch("/api/news");
  const data = (await response.json()) as NewsArticle[];
  return {
    articles: data,
    total: data.length,
  };
};

interface params {
  categoryType?: CategoryType;
  query?: string;
  refetch?: boolean;
}

const useNewsArticle = (params?: params) => {
  const { categoryType, query, refetch } = params ?? {};
  return useQuery<NewsArticleData, Error>(["news"], fetchNewsArticles, {
    select: ({ articles }: NewsArticleData) => {
      let list = articles.filter((rec) =>
        categoryType ? rec.post_category_id === categoryType : true
      );

      list = list.filter((rec) =>
        query ? rec.title.toUpperCase().includes(query.toUpperCase()) : true
      );

      return { articles: list, total: articles.length };
    },
  });
};

export { useNewsArticle, fetchNewsArticles };
