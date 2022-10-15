import { styled } from "@stitches/react";
import { InputHTMLAttributes } from "react";

const InputEl = styled("input", {
  fontSize: "13px",
  padding: "5px",
  backgroundColor: "white",
});

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <InputEl {...props}></InputEl>
);

export { Input };
