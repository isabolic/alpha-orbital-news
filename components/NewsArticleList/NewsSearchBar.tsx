import { css } from "@stitches/react";
import { Button, Input } from "@toolkit";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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
  const [query, setQuery] = useState("");

  const onClick = () => {
    router.push({ query: { ...router.query, query } });
  };

  useEffect(() => setQuery(value ?? ""), [value]);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={box()}>
      <Input value={query} onChange={onChange} className={input()} />
      <Button onClick={onClick} className={searchBtn()}>
        Search
      </Button>
    </div>
  );
};

export { NewsSearchBar };
