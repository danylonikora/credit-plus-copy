import React, { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PhoneInfo from "../PhoneInfo/PhoneInfo";
import CrossSvg from "../../assets/images/burger-menu-close.svg";
import PhoneSvg from "../../assets/images/burger-menu-phone.svg";
import ClockSvg from "../../assets/images/burger-menu-clock.svg";
import "./BurgerMenu.scss";
import locales from "../../locales";
import { LanguageContext } from "../../App";

function BurgerMenu(props) {
  // burgerToggler

  const [language, setLanguage] = useContext(LanguageContext);

  const overlayRef = useRef();
  const crossRef = useRef();
  const burgerMenuRef = useRef();
  const ukTogglerRef = useRef();
  const ruTogglerRef = useRef();

  useEffect(() => {
    setTimeout(() => (burgerMenuRef.current.style.marginRight = 0), 0);
    document.body.style.overflow = "hidden";
    overlayRef.current.addEventListener("click", props.toggleBurger);
    crossRef.current.addEventListener("click", props.toggleBurger);
    crossRef.current.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      props.toggleBurger();
    });

    return () => (document.body.style.overflow = "visible");
  }, []);

  useEffect(() => {
    const activeClass = "burger-menu__language--active";

    if (language === "uk") {
      ruTogglerRef.current.classList.remove(activeClass);
      ukTogglerRef.current.classList.add(activeClass);
    } else {
      ukTogglerRef.current.classList.remove(activeClass);
      ruTogglerRef.current.classList.add(activeClass);
    }
  }, [language]);

  return (
    <>
      <div className="burger-menu__overlay" ref={overlayRef}></div>
      <div className="burger-menu" ref={burgerMenuRef}>
        <h4 className="burger-menu__heading">
          <span>{locales.burgerMenu.heading1}</span>
          <CrossSvg
            className="burger-menu__close-icon"
            ref={crossRef}
            tabIndex={0}
          />
        </h4>
        <nav className="burger-menu__nav">
          {locales.burgerMenu.navLinks.map((link) => (
            <Link
              to={link.to}
              className="burger-menu__link"
              onClick={props.toggleBurger}
              key={link.to}
            >
              {link.content}
            </Link>
          ))}
        </nav>
        <h4 className="burger-menu__heading">{locales.burgerMenu.heading2}</h4>
        <span>{locales.burgerMenu.proceeding}</span>
        <div className="burger-menu__contacts">
          <div className="burger-menu__contact">
            <PhoneSvg />
            <PhoneInfo color="#003366" />
          </div>
          <a className="burger-menu__recall-me" href="#">
            {locales.burgerMenu.recallMe}
          </a>
          <div className="burger-menu__contact">
            <ClockSvg />
            <div className="burger-menu__working-hours">
              <span>{locales.burgerMenu.weekdaysSchedule}</span>
              <span>{locales.burgerMenu.weekendSchedule}</span>
            </div>
          </div>
          <div className="burger-menu__languages">
            <span className="burger-menu__lang">{locales.burgerMenu.lang}</span>
            <span
              className="burger-menu__language"
              ref={ruTogglerRef}
              tabIndex={language === "ru" ? null : 0}
              onClick={() => setLanguage("ru")}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                setLanguage("ru");
              }}
              title="Русский язык"
            >
              RU
            </span>
            <span
              className="burger-menu__language"
              ref={ukTogglerRef}
              onClick={() => setLanguage("uk")}
              tabIndex={language === "uk" ? null : 0}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                setLanguage("uk");
              }}
              title="Українська мова"
            >
              UA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
