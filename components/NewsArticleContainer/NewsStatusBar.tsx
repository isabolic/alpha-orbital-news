import { useNewsArticleRefresh } from "@hooks";
import { css } from "@stitches/react";
import { Button } from "@toolkit";

interface NewsStatusBarProps {
  numberOfArticles: number;
  showRefetch?: boolean;
}

const container = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  minHeight: "2rem",
});

const button = css({
  marginLeft: "5px",
  padding: "7px 5px",
  borderRadius: "4px",
});

const NewsStatusBar = ({
  numberOfArticles,
  showRefetch,
}: NewsStatusBarProps) => {
  const { mutate } = useNewsArticleRefresh();

  const onRefetchHandler = () => {
    mutate();
  };

  return (
    <div className={container()}>
      Currently showing {numberOfArticles} articles
      {showRefetch && (
        <Button className={button()} onClick={onRefetchHandler}>
          Refetch
        </Button>
      )}
    </div>
  );
};

export { NewsStatusBar };
