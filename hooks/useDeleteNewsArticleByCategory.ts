import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CategoryType } from "@utils";

const deleteNewsArticleByCategory = async (category: CategoryType) => {
  return await fetch(`/api/news/category/${category}`, { method: "DELETE" });
};

const useDeleteNewsArticleByCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteNewsArticleByCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};

export { useDeleteNewsArticleByCategory };
