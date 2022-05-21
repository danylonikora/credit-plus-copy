import React, { useRef, useEffect } from "react";
import PhoneInfo from "../../common/PhoneInfo/PhoneInfo";
import CrossSvg from "/public/images/burger-menu-close.svg";
import PhoneSvg from "/public/images/burger-menu-phone.svg";
import ClockSvg from "/public/images/burger-menu-clock.svg";
import * as styles from "./BurgerMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../../../utils/useTranslation";

function BurgerMenu(props) {
  // toggleBurger
  const { locale } = useRouter();
  const { Navbar: t } = useTranslation();

  const overlayRef = useRef();
  const crossRef = useRef();
  const burgerMenuRef = useRef();
  const ukLanguageRef = useRef();
  const ruLanguageRef = useRef();

  useEffect(() => {
    handleResize();
    setTimeout(() => {
      burgerMenuRef.current.style.marginRight = 0;
      window.addEventListener("resize", handleResize);
    }, 0);
    document.body.style.overflow = "hidden";
    overlayRef.current.addEventListener("click", closeBurger);
    crossRef.current.addEventListener("click", closeBurger);
    crossRef.current.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      closeBurger();
    });

    function handleResize() {
      burgerMenuRef.current.style.height = window.innerHeight + "px";
      overlayRef.current.style.height = window.innerHeight + "px";
    }

    return () => {
      document.body.style.overflow = "visible";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const activeClass = styles.burgerMenu__activeLanguage;
    if (locale === "uk") {
      ruLanguageRef.current.classList.remove(activeClass);
      ukLanguageRef.current.classList.add(activeClass);
    } else {
      ukLanguageRef.current.classList.remove(activeClass);
      ruLanguageRef.current.classList.add(activeClass);
    }
  }, [locale]);

  function closeBurger() {
    burgerMenuRef.current.style.marginRight = "-300px";
    setTimeout(props.toggleBurger, 200);
  }

  return (
    <>
      <div className={styles.burgerMenu__overlay} ref={overlayRef}></div>
      <div className={styles.burgerMenu} ref={burgerMenuRef}>
        <h4 className={styles.burgerMenu__heading}>
          <span>{t.BurgerMenu.heading1}</span>
          <CrossSvg
            className={styles.burgerMenu__closeIcon}
            ref={crossRef}
            tabIndex={0}
          />
        </h4>
        <nav className={styles.burgerMenu__nav}>
          {t.links.map((link) => (
            <Link href={link.to} key={link.to} prefetch={false}>
              <a className={styles.burgerMenu__link} onClick={closeBurger}>
                {link.content}
              </a>
            </Link>
          ))}
        </nav>
        <h4 className={styles.burgerMenu__heading}>{t.BurgerMenu.heading2}</h4>
        <span>{t.BurgerMenu.proceeding}</span>
        <div className={styles.burgerMenu__contacts}>
          <div className={styles.burgerMenu__contact}>
            <PhoneSvg />
            <PhoneInfo color="#003366" />
          </div>
          <a className={styles.burgerMenu__recallMe} href="#">
            {t.BurgerMenu.recallMe}
          </a>
          <div className={styles.burgerMenu__contact}>
            <ClockSvg />
            <div className={styles.burgerMenu__workingHours}>
              <span>{t.BurgerMenu.weekdaysSchedule}</span>
              <span>{t.BurgerMenu.weekendSchedule}</span>
            </div>
          </div>
          <div className={styles.burgerMenu__languages}>
            <span className={styles.burgerMenu__languageWord}>
              {t.BurgerMenu.language}
            </span>
            <Link href="/" locale="ru" prefetch={false}>
              <a
                className={styles.burgerMenu__language}
                ref={ruLanguageRef}
                title="Русский язык"
              >
                RU
              </a>
            </Link>
            <Link href="/" locale="uk" prefetch={false}>
              <a
                className={styles.burgerMenu__language}
                ref={ukLanguageRef}
                title="Українська мова"
              >
                UA
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
