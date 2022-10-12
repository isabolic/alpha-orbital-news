import { NewsArticle } from "@dto";
import { useQuery } from "@tanstack/react-query";
import { useNews } from "./useNews";

const getNewsCategories = (data: NewsArticle[]) => {
  return data.reduce<string[]>((categoryList, article) => {
    if (!categoryList.includes(article.post_category_id))
      categoryList.push(article.post_category_id);

    return categoryList;
  }, []);
};

const useNewsCategories = () => {
  const { data: newsArticles } = useNews();

  return useQuery<string[], Error>(
    ["newsCategories"],
    () => getNewsCategories(newsArticles!),
    {
      enabled: !!newsArticles,
    }
  );
};

export { useNewsCategories, getNewsCategories };
