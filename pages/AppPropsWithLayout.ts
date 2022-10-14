import { AppProps } from "next/app";
import { NextPageWithLayout } from "./NextPageWithLayout";

type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};

export type { AppPropsWithLayout };
