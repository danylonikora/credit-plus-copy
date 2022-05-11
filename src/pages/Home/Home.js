import React from "react";
import Hero from "../../components/Hero/Hero";
import Benefits from "../../components/Benefits/Benefits";
import CreditInfo from "../../components/CreditInfo/CreditInfo";
import Testimonials from "../../components/Testimonials/Testimonials";
import Conditions from "../../components/Conditions/Conditions";

function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <CreditInfo />      
      <Testimonials />
      <Conditions />
    </main>
  );
}

export default Home;
