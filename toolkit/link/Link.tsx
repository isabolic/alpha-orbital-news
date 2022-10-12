import { styled } from "@stitches/react";
import NLink from "next/link";

const Anchor = styled("a", {
  fontSize: "13px",
  padding: "10px 15px",
});

interface LinkProps {
  href: string;
  text: string;
}

const Link = ({ href, text }: LinkProps) => {
  return (
    <NLink href={href} passHref>
      <Anchor>{text}</Anchor>
    </NLink>
  );
};

export { Link };
