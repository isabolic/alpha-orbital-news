import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { GetStaticProps } from "next";
import React from "react";
import { AppLayout, NewsArticleContainer } from "@components";
import { NextPageWithLayout } from "./NextPageWithLayout";
import { useRouter } from "next/router";
import { CategoryType } from "@utils";
import { loadNewsArticles } from "@data";
import { NewsArticle, NewsArticleData } from "@dto";

const Main: NextPageWithLayout = () => {
  const router = useRouter();
  const { filter, query } = router.query;

  return (
    <>
      <NewsArticleContainer
        query={query as string | undefined}
        categoryType={filter as CategoryType | undefined}
      />
    </>
  );
};

Main.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default Main;
