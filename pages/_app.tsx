import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

console.log(theme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThemeProvider
        theme={{ ...theme.custom, ...{ color: theme.colors.brand } }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
