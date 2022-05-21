import React from "react";
import "../styles/global.scss";
import Layout from "../components/layout/Layout/Layout";
import TranslationContext from "../utils/TranslationContext";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Credit Plus Copy</title>
        <link
          rel="icon"
          href="/favicons/icon.svg"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
        />
      </Head>
      <TranslationContext.Provider value={pageProps.translation}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TranslationContext.Provider>
    </>
  );
}

export default App;
