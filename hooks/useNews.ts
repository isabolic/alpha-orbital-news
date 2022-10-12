import { useQuery } from "@tanstack/react-query";
import type { NewsArticle } from "@dto";

const fetchNews = async () => {
  const response = await fetch(
    "https://www.alpha-orbital.com/last-100-news.json"
  );
  const newsArticle = await response.json();
  return newsArticle;
};

const useNews = () => {
  return useQuery<NewsArticle[], Error>(["news"], () => fetchNews());
};

export { useNews, fetchNews };
