import { useMutation, useQueryClient } from "@tanstack/react-query";

const refreshNewsArticles = async () => {
  return await fetch("/api/news", { method: "POST" });
};

const useNewsArticleRefresh = () => {
  const queryClient = useQueryClient();

  return useMutation(refreshNewsArticles, {
    onSuccess: () => {
      queryClient.invalidateQueries(["news"]);
    },
  });
};

export { useNewsArticleRefresh };
