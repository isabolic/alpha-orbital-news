import cache from "memory-cache";
import { NewsArticle } from "../dto/NewsArticle";

const NEWS_ARTICLES = "NEWS_ARTICLES";

const loadNewsArticles = async () => {
  const data = await fetch(process.env["NEWS_API_URL"] ?? "");
  const newsArticles = await data.json();
  cache.put(NEWS_ARTICLES, newsArticles);
  return newsArticles;
};

const reloadNewsArticles = async () => {
  cache.del(NEWS_ARTICLES);
  return await loadNewsArticles();
};

const getNewsArticles = async () => {
  // if there is no cache, try to load...
  if (!cache.keys().includes(NEWS_ARTICLES)) {
    await loadNewsArticles();
  }
  return cache.get(NEWS_ARTICLES);
};

const deleteNewsArticles = async (slug: string) => {
  const data = cache.get(NEWS_ARTICLES) as NewsArticle[];

  cache.del(NEWS_ARTICLES);
  cache.put(
    NEWS_ARTICLES,
    data.filter((news) => news.slug !== slug)
  );
};

export {
  loadNewsArticles,
  getNewsArticles,
  deleteNewsArticles,
  reloadNewsArticles,
};
