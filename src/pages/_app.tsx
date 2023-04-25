import { Layout } from "@/components/layout";
import { GlobalStyles } from "@/styles/globalStyles";
import { AppTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "styled-components";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <ThemeProvider theme={AppTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
