import { styled } from "@stitches/react";
import Head from "next/head";
import React from "react";
import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

const LayoutContainer = styled("main", {
  display: "flex",
  padding: "2rem",
  marginTop: "4rem",
  justifyContent: "center",
});

const AppLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Head>
        <title>Alpa Orbital News</title>
      </Head>
      <Navbar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export { AppLayout };
