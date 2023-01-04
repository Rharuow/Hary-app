import type { AppProps } from "next/app";
import LanguageProvider from "../context/LanguageContext";
import Layout from "../context/LayoutContext";
import "../styles/main.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <LanguageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}
