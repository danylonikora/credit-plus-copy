import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PhoneInfo from "../PhoneInfo/PhoneInfo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import isMediaMatch from "../../utils/isMediaMatch";
import navLinks from "../../content/navLinks.json";
import LogoSvg from "../../assets/images/logo.svg";
import EnterSvg from "../EnterSvg/EnterSvg";
import BurgerTogglerSvg from "../../assets/images/burger-menu-toggler.svg";
import "./Navbar.scss";

function Navbar() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isTabletOrNotebook, setIsTabletOrNotebook] = useState(
    isMediaMatch(1200)
  );
  const [isMobile, setIsMobile] = useState(isMediaMatch(400));

  const burgerTogglerRef = useRef();

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
    <nav className="navbar">
      <Link to="/">
        <LogoSvg
          className="navbar__logo"
          width="12.4rem"
          height="5.4rem"
          viewBox="0 0 124 54"
        />
      </Link>
      {!isTabletOrNotebook && (
        <>
          {navLinks.map((link) => (
            <Link to={link.to} className="navbar__link" key={link.content}>
              {link.content}
            </Link>
          ))}
          <PhoneInfo color="#003366" />
          <div className="navbar__language">
            <span className="navbar__language--ua navbar__language--selected">
              UA
            </span>
            <a
              className="navbar__language--ru"
              href="https://dani-armani.github.io/credit-plus-copy/ru"
            >
              RU
            </a>
          </div>
          <div>
            <a className="navbar__enter-btn" href="#">
              <EnterSvg color="white" />
              Увійти
            </a>
          </div>
        </>
      )}
      {isTabletOrNotebook && (
        <div className="navbar__button-and-toggler-container">
          <div className="navbar__responsive-btn-container">
            {isMobile ? (
              <>
                <EnterSvg color="orange" />
                <a className="navbar__enter" href="#">
                  Увійти
                </a>
              </>
            ) : (
              <a className="navbar__enter-btn" href="#">
                <EnterSvg color="white" />
                Увійти
              </a>
            )}
          </div>
          <BurgerTogglerSvg
            className="navbar__burger-menu-toggler"
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
