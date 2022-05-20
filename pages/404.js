import React from "react";
import NotFound from "../components/404/NotFound";

function NotFoundPage() {
  return <NotFound />;
}

export default NotFoundPage;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/404.json`),
      },
    },
  };
}
