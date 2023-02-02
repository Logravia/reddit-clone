import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/chakra/theme";

import "@fontsource/open-sans";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import Layout from "@/components/Layout/Layout";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
