import { useNewsArticle } from "@hooks";
import { css, styled } from "@stitches/react";
import { CategoryType } from "@utils";
import { useState } from "react";
import { isSearchValid } from "./isSearchValid";
import { NewsArticleList } from "./NewsArticleList";
import { NewsSearchBar } from "./NewsSearchBar";
import { NewsStatusBar } from "./NewsStatusBar";

const Section = styled("section", {
  width: "50%",
});

const box = css({
  marginBottom: "1rem",
});

interface NewsArticleListProps {
  categoryType?: CategoryType;
  query?: string;
}

const NewsArticleContainer = ({
  categoryType,
  query,
}: NewsArticleListProps) => {
  const params = {
    categoryType,
    ...(isSearchValid(query ?? "") && { query }),
  };

  const { data, isLoading } = useNewsArticle(params);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Section>
      <div className={box()}>
        <NewsSearchBar value={query} />
      </div>
      <div className={box()}>
        <NewsStatusBar
          showRefetch={data?.total !== 100}
          numberOfArticles={data?.articles.length ?? 0}
        />
      </div>
      <div className={box()}>
        <NewsArticleList articles={data?.articles} />
      </div>
    </Section>
  );
};

export { NewsArticleContainer };
