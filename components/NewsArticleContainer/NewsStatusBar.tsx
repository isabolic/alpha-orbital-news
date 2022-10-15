import {
  useDeleteNewsArticleByCategory,
  useNewsArticleCategory,
  useNewsArticleRefresh,
} from "@hooks";
import { css } from "@stitches/react";
import { Button, Select, Switch } from "@toolkit";
import { CategoryType, Empty, getCategoyLabel } from "@utils";
import { useRouter } from "next/router";
import { useState } from "react";

interface NewsStatusBarProps {
  numberOfArticles: number;
  showRefetch?: boolean;
}

const container = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: "2rem",
});

const itemStyle = css({
  marginLeft: "5px",
  $$padding: "7px 5px",
  borderRadius: "4px",
});

const box = css({
  display: "flex",
  alignItems: "center",
});

const space = css({
  padding: "0px 5px",
});

const fadeOut = css({
  visibility: "visible",
  opacity: 0,
  transition: "visibility 0s linear 0s, opacity 300ms",
});

const fadeIn = css({
  visibility: "visible",
  opacity: 1,
  transition: "visibility 0s linear 0s, opacity 300ms",
});

const NewsStatusBar = ({
  numberOfArticles,
  showRefetch,
}: NewsStatusBarProps) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Empty<CategoryType>>("");

  const { mutate } = useNewsArticleRefresh();
  const { mutate: mutateDeleteByCategory } = useDeleteNewsArticleByCategory();
  const { data } = useNewsArticleCategory();

  const onRefetchHandler = () => {
    mutate();
  };

  const deleteNewsArticleByCategoryHandler = () => {
    selectedCategory && mutateDeleteByCategory(selectedCategory);
    if (selectedCategory === router.query.filter) {
      router.push("/");
    }
    setSelectedCategory("");
  };

  const categoryList = data?.map((x) => ({
    value: x,
    label: getCategoyLabel(x),
  }));

  return (
    <div className={container()}>
      <div className={box()}>
        <Switch className={itemStyle()} onChange={setShowMenu} />
        <div className={showMenu ? fadeIn() : fadeOut()}>
          <div className={box()}>
            <div className={space()}>
              <Select<CategoryType>
                className={itemStyle()}
                onChange={setSelectedCategory}
                value={selectedCategory}
                list={categoryList ?? []}
                empty
              />
            </div>
            <div className={space()}>
              <Button
                className={itemStyle()}
                disabled={!selectedCategory}
                onClick={deleteNewsArticleByCategoryHandler}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        Currently showing {numberOfArticles} articles
        {showRefetch && (
          <Button className={itemStyle()} onClick={onRefetchHandler}>
            Refetch
          </Button>
        )}
      </div>
    </div>
  );
};

export { NewsStatusBar };
