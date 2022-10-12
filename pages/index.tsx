import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import React from "react";
import { AppLayout, NewsArticleList } from "@components";
import { fetchNewsArticles } from "../hooks";
import { NewsArticle } from "../dto/NewsArticle";
import { NextPageWithLayout } from "./NextPageWithLayout";
import { useRouter } from "next/router";
import { CategoryType } from "@utils";

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<NewsArticle>(["news"], fetchNewsArticles);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Main: NextPageWithLayout = () => {
  const router = useRouter();
  const { filter, query } = router.query;

  return (
    <>
      <NewsArticleList
        query={query as string | undefined}
        categoryType={filter as CategoryType | undefined}
      ></NewsArticleList>
    </>
  );
};

Main.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Main;
