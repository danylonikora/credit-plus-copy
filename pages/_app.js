import React from "react";
import "../styles/global.scss";
import Layout from "../components/layout/Layout/Layout";
import TranslationContext from "../utils/TranslationContext";

function App({ Component, pageProps }) {
  return (
    <TranslationContext.Provider value={pageProps.translation}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslationContext.Provider>
  );
}

export default App;
