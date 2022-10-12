import { NewsArticle } from "@dto";
import { useQuery } from "@tanstack/react-query";
import { useNewsArticle } from "./useNewsArticle";

const getNewsCategories = (data: NewsArticle[]) => {
  return data.reduce<string[]>((categoryList, article) => {
    if (!categoryList.includes(article.post_category_id))
      categoryList.push(article.post_category_id);

    return categoryList;
  }, []);
};

const useNewsArticleCategory = () => {
  const { data: newsArticles, isLoading } = useNewsArticle();

  return useQuery<string[], Error>(
    ["newsCategories"],
    () => getNewsCategories(newsArticles!),
    {
      enabled: !isLoading,
    }
  );
};

export { useNewsArticleCategory, getNewsCategories };
