import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { NewsArticleList } from "@components";
import { fetchNews } from "../hooks";
import { NewsArticle } from "../dto/NewsArticle";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<NewsArticle>(["news"], fetchNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Main: NextPage = () => {
  return (
    <div>
      <NewsArticleList></NewsArticleList>
    </div>
  );
};

export default Main;
