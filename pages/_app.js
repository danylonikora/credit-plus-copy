import React from "react";
import "../styles/global.scss";
import Layout from "../components/layout/Layout/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
