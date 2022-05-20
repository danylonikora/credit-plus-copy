import React from 'react';
import About from "../components/about/About";

function AboutPage() {
  return <About />
}

export default AboutPage;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/about.json`),
      }
    },
  };
}