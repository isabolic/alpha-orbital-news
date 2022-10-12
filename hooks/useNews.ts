import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@dto";
import { CategoryType } from "../utils/categoryType";

const fetchNews = async () => {
  const response = await fetch(
    "https://www.alpha-orbital.com/last-100-news.json"
  );
  const newsArticle = await response.json();
  return newsArticle;
};

const useNews = (categoryType?: CategoryType) => {
  return useQuery<NewsArticle[], Error>(["news"], () => fetchNews(), {
    select: (data) => {
      return data.filter((rec) =>
        categoryType ? rec.post_category_id === categoryType : true
      );
    },
  });
};

export { useNews, fetchNews };
