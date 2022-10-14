import React, { lazy } from "react";
import "../styles/globals.css";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { DehydratedState } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppPropsWithLayout } from "./AppPropsWithLayout";

const ReactQueryDevtoolsProduction = lazy(() =>
  import("@tanstack/react-query-devtools/build/lib/index.prod.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const MyApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = React.useState(() => new QueryClient());

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools initialIsOpen />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
