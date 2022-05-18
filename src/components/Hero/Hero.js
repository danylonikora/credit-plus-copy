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
          alt="Перший кредит онлайн до 10 000 грн під 0,01% на день"
        />
      </picture>
      <Calculator initialDays={15} initialSum={5000} />
    </section>
  );
}

export default Hero;
