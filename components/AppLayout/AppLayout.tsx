import Head from "next/head";
import React from "react";
import { PropsWithChildren } from "react";
import { Navbar } from "../Navbar";

const AppLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Head>
        <title>Alpa Orbital News</title>
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
};

export { AppLayout };
