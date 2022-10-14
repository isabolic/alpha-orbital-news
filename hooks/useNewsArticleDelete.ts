import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteNewsArticle = async (slug: string) => {
  return await fetch(`/api/news/${slug}`, { method: "DELETE" });
};

const useNewsArticleDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteNewsArticle, {
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};

export { useNewsArticleDeleteMutation };
