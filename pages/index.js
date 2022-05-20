import React from "react";
import Hero from "../components/home/Hero/Hero";
import Benefits from "../components/home/Benefits/Benefits";
import CreditInfo from "../components/home/CreditInfo/CreditInfo";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Partners from "../components/home/Partners/Partners";
import Conditions from "../components/home/Conditions/Conditions";
import AboutService from "../components/home/AboutService/AboutService";

function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <CreditInfo />
      <Testimonials />
      <Partners />
      <Conditions />
      <AboutService />
    </main>
  );
}

export default Home;

export function getStaticProps({ locale }) {
  return {
    props: {
      translation: {
        ...require(`../translations/${locale}/Layout.json`),
        ...require(`../translations/${locale}/PhoneInfo.json`),
        ...require(`../translations/${locale}/home.json`),
      }
    },
  };
}
