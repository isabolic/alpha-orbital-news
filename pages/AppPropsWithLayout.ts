import { AppProps } from "next/app";
import { NextPageWithLayout } from "./NextPageWithLayout";

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout<P>;
};
