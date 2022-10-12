import { css } from "@stitches/react";
import { Button, Input } from "@toolkit";
import { useRouter } from "next/router";
import { useState } from "react";

const input = css({
  color: "black",
  width: "100%",
  border: "none",
  borderTopLeftRadius: "3px",
  borderBottomLeftRadius: "3px",
  outline: "none",
});

const box = css({
  display: "flex",
  marginBottom: "1rem",
});

const searchBtn = css({
  borderRadius: "0",
  borderTopRightRadius: "3px",
  borderBottomRightRadius: "3px",
});

interface NewsSearchBarProps {
  value?: string;
}

const NewsSearchBar = ({ value }: NewsSearchBarProps) => {
  const router = useRouter();
  const [query, setQuery] = useState(value);

  const onClick = () => {
    router.push({ query: { ...router.query, query } });
  };

  return (
    <div className={box()}>
      <Input
        value={value}
        onChange={(e) => setQuery(e.target.value)}
        className={input()}
      ></Input>
      <Button onClick={onClick} className={searchBtn()}>
        Search
      </Button>
    </div>
  );
};

export { NewsSearchBar };
