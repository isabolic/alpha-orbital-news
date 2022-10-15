import { NewsArticle } from "@dto";
import { useQuery } from "@tanstack/react-query";
import { CategoryType } from "@utils";
import { useNewsArticle } from "./useNewsArticle";

const getNewsCategories = (data: NewsArticle[]) => {
  return data.reduce<CategoryType[]>((categoryList, article) => {
    if (!categoryList.includes(article.post_category_id))
      categoryList.push(article.post_category_id);

    return categoryList;
  }, []);
};

const useNewsArticleCategory = () => {
  const { data, isLoading } = useNewsArticle();

  return useQuery<CategoryType[], Error>(
    ["newsCategories"],
    () => getNewsCategories(data?.articles!),
    {
      enabled: !isLoading,
    }
  );
};

export { useNewsArticleCategory, getNewsCategories };
