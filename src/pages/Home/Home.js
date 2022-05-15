import React from "react";
import Hero from "../../components/Hero/Hero";
import Benefits from "../../components/Benefits/Benefits";
import CreditInfo from "../../components/CreditInfo/CreditInfo";
import Testimonials from "../../components/Testimonials/Testimonials";
import Conditions from "../../components/Conditions/Conditions";
import Partners from "../../components/Partners/Partners";
import AboutService from "../../components/AboutService/AboutService";

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
