import type { AppProps } from "next/app";
import LanguageProvider from "../context/LanguageContext";
import Layout from "../context/LayoutContext";
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
