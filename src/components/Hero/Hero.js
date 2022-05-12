import React from "react";
import Calculator from "../Calculator/Calculator";
import heroPng from "../../assets/images/hero.png";
import heroMobilePng from "../../assets/images/hero-mobile.png";
import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <picture className="hero__image">
        <source srcSet={heroMobilePng} media="(max-width: 320px)" />
        <img
          className="hero__image"
          src={heroPng}
          width="1170"
          height="360"
        />
      </picture>
      <Calculator />
    </section>
  );
}

export default Hero;
