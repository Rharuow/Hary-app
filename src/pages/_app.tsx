import type { AppProps } from "next/app";
import LanguageProvider from "../app/Language";
import Layout from "../app/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
