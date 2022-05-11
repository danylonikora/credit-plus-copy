import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PhoneInfo from "../PhoneInfo/PhoneInfo";
import navLinks from "../../content/navLinks.json";
import CrossSvg from "../../assets/images/burger-menu-close.svg";
import PhoneSvg from "../../assets/images/burger-menu-phone.svg";
import ClockSvg from "../../assets/images/burger-menu-clock.svg";
import "./BurgerMenu.scss";

function BurgerMenu(props) {
  // burgerToggler

  const overlayRef = useRef();
  const crossRef = useRef();
  const burgerMenuRef = useRef();

  useEffect(() => {
    setTimeout(() => (burgerMenuRef.current.style.marginRight = 0), 0);
    document.body.style.overflow = "hidden";
    overlayRef.current.addEventListener("click", props.toggleBurger);
    crossRef.current.addEventListener("click", props.toggleBurger);

    return () => (document.body.style.overflow = "visible");
  }, []);

  return (
    <>
      <div className="burger-menu__overlay" ref={overlayRef}></div>
      <div className="burger-menu" ref={burgerMenuRef}>
        <h4 className="burger-menu__heading">
          <span>Довідкова інформація</span>
          <CrossSvg className="burger-menu__close-icon" ref={crossRef} />
        </h4>
        <nav className="burger-menu__nav">
          {navLinks.map((link) => (
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
        <h4 className="burger-menu__heading">Контактна інформація</h4>
        <span>Обробка заявок на кредит — цілодобово без вихідних</span>
        <div className="burger-menu__contacts">
          <div className="burger-menu__contact">
            <PhoneSvg />
            <PhoneInfo color="#003366" />
          </div>
          <span className="burger-menu__recall-me">Передзвоніть мені</span>
          <div className="burger-menu__contact">
            <ClockSvg />
            <div className="burger-menu__working-hours">
              <span>Пн-Пт: 8:00 - 23:00</span>
              <span>Сб-Нд: 9:00 - 21:00</span>
            </div>
          </div>
          <div className="burger-menu__languages">
            <span className="burger-menu__lang">Мова: </span>
            <a
              className="burger-menu__language"
              href="https://dani-armani.github.io/credit-plus-copy/ru"
            >
              RU
            </a>
            <span className="burger-menu__language burger-menu__language--active">
              UA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BurgerMenu;
