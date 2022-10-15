import React from "react";
import { AppLayout, NewsArticleContainer } from "@components";
import { NextPageWithLayout } from "@utils";
import { useRouter } from "next/router";
import { CategoryType } from "@utils";

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
