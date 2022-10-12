import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { NextPage } from "next";
import React from "react";
import { NewsArticleList } from "@components";
import { fetchNews } from "../hooks";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["news"], () => fetchNews());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Main: NextPage = () => {
  return (
    <div>
      <NewsArticleList></NewsArticleList>
    </div>
  );
};

export default Main;
