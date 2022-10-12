import { useNewsArticleCategory } from "@hooks";
import { css, styled } from "@stitches/react";
import { Link } from "@toolkit";
import { useRouter } from "next/router";
import { LinkCategory } from "./LinkCategory";

const NavBar = styled("section", {
  fontSize: "16px",
  display: "flex",
  position: "fixed",
  left: "0px",
  top: "0px",
  width: "100%",
  backgroundColor: "black",
  zIndex: 1,
  padding: "1rem",
  justifyContent: "center",
});

const activeClass = css({
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  color: "#4facf9",
});

const Navbar = () => {
  const { data, isLoading } = useNewsArticleCategory();
  const router = useRouter();
  const { filter } = router.query;

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <NavBar>
      {data?.map((x) => (
        <LinkCategory
          className={filter === x ? activeClass() : undefined}
          key={x}
          categoryType={x}
        />
      ))}
      <Link
        className={!filter ? activeClass() : undefined}
        text="Show all"
        href={`/`}
      />
    </NavBar>
  );
};

export { Navbar };
