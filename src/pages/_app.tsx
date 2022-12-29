import type { AppProps } from "next/app";
import Layout from "../app/Layout";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
