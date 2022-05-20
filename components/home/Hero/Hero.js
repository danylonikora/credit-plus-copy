import React from "react";
import Calculator from "../Calculator/Calculator";
import heroPng from "/public/images/hero.png";
import heroMobilePng from "/public/images/hero-mobile.png";
import * as styles from "./Hero.module.scss";
import Image from "next/image";

function Hero() {
  return (
    <section className={styles.hero}>
      <picture className={styles.hero__image}>
        <source srcSet={heroMobilePng} media="(max-width: 320px)" />
        <Image
          className={styles.hero__image}
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
