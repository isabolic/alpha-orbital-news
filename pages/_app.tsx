import React, { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppLayout } from "../components";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import type { DehydratedState } from "@tanstack/react-query";

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
