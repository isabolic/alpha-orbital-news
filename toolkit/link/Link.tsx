import { styled } from "@stitches/react";
import NLink from "next/link";
import { UrlObject } from "url";

const Anchor = styled("a", {
  fontSize: "13px",
  padding: "10px 15px",
});

interface LinkProps {
  href: string | UrlObject;
  text: string;
  className?: string;
  target?: string;
}

const Link = ({ href, text, className, target }: LinkProps) => {
  return (
    <NLink href={href} passHref>
      <Anchor target={target} className={className}>
        {text}
      </Anchor>
    </NLink>
  );
};

export { Link };
