import { css } from "@stitches/react";
import { Button, Input } from "@toolkit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
});

const searchBtn = css({
  borderRadius: "0px 3px 3px 0px",
});

interface NewsSearchBarProps {
  value?: string;
}

const NewsSearchBar = ({ value }: NewsSearchBarProps) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({ query: { ...router.query, query: search } });
  };

  // sync
  useEffect(() => setSearch(value ?? ""), [value]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  return (
    <form onSubmit={submitHandler} className={box()}>
      <Input value={search} onChange={onChange} className={input()} />
      <Button className={searchBtn()}>Search</Button>
    </form>
  );
};

export { NewsSearchBar };
