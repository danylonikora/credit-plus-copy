import React from "react";
import InternalError from "../components/_error/InternalError";

function Error() {
  return <InternalError />;
}

export default Error;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/_error.json`),
      },
    },
  };
}
