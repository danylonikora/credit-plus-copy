import React, { useState, useEffect, useRef } from "react";
import PhoneInfo from "../../common/PhoneInfo/PhoneInfo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import isMediaMatch from "../../../utils/isMediaMatch";
import LogoSvg from "/public/images/logo.svg";
import EnterSvg from "../../common/EnterSvg/EnterSvg";
import BurgerTogglerSvg from "/public/images/burger-menu-toggler.svg";
import * as styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "../../../utils/useTranslation";

function Navbar() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isTabletOrNotebook, setIsTabletOrNotebook] = useState();
  const [isMobile, setIsMobile] = useState();
  const { locale } = useRouter();
  const { Navbar: t } = useTranslation();

  const burgerTogglerRef = useRef();
  const ukLanguageRef = useRef();
  const ruLanguageRef = useRef();

  useEffect(() => {
    if (!ukLanguageRef.current || !ruLanguageRef.current) return;

    const activeClass = styles.navbar__activeLanguage;
    if (locale === "uk") {
      ruLanguageRef.current.classList.remove(activeClass);
      ukLanguageRef.current.classList.add(activeClass);
    } else {
      ukLanguageRef.current.classList.remove(activeClass);
      ruLanguageRef.current.classList.add(activeClass);
    }
  }, [locale, isBurgerActive]);

  useEffect(() => {
    setIsTabletOrNotebook(isMediaMatch(1200));
    setIsMobile(isMediaMatch(400));
  });

  useEffect(() => {
    if (isTabletOrNotebook) {
      burgerTogglerRef.current.addEventListener("click", () => {
        setIsBurgerActive((prev) => !prev);
      });
    }

    window
      .matchMedia("(max-width: 400px)")
      .addEventListener("change", (e) => setIsMobile(e.matches));

    window
      .matchMedia("(max-width: 1200px)")
      .addEventListener("change", (e) => setIsTabletOrNotebook(e.matches));
  }, [isTabletOrNotebook]);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>
          <LogoSvg
            className="navbar__logo"
            width="12.4rem"
            height="5.4rem"
            viewBox="0 0 124 54"
          />
        </a>
      </Link>
      {!isTabletOrNotebook && (
        <>
          {t.links.map((link) => (
            <Link href={link.to} key={link.content}>
              <a className={styles.navbar__link}>{link.content}</a>
            </Link>
          ))}
          <PhoneInfo color="#003366" />
          <div className={styles.navbar__languages}>
            <Link href="/" locale="uk">
              <a title="Українська  мова" ref={ukLanguageRef}>
                UA
              </a>
            </Link>
            <Link href="/" locale="ru">
              <a title="Русский язык" ref={ruLanguageRef}>
                RU
              </a>
            </Link>
          </div>
          <div>
            <a className={styles.navbar__enterBtn} href="#">
              <EnterSvg color="white" />
              {t.enter}
            </a>
          </div>
        </>
      )}
      {isTabletOrNotebook && (
        <div className={styles.navbar__buttonAndTogglerContainer}>
          <div className={styles.navbar__responsiveBtnContainer}>
            {isMobile ? (
              <>
                <EnterSvg color="orange" />
                <a className={styles.navbar__enter} href="#">
                  {t.enter}
                </a>
              </>
            ) : (
              <a className={styles.navbar__enterBtn} href="#">
                <EnterSvg color="white" />
                {t.enter}
              </a>
            )}
          </div>
          <BurgerTogglerSvg
            className={styles.navbar__burgerMenuToggler}
            ref={burgerTogglerRef}
          />
        </div>
      )}
      {isBurgerActive && (
        <BurgerMenu toggleBurger={() => setIsBurgerActive((prev) => !prev)} />
      )}
    </nav>
  );
}

export default Navbar;
