import React from "react";
import { Link } from "react-router-dom";
import PhoneInfo from "../PhoneInfo/PhoneInfo";
import PhoneSvg from "../../assets/images/phone.svg";
import ClockSvg from "../../assets/images/clock.svg";
import MailSvg from "../../assets/images/mail.svg";
import FacebookSvg from "../../assets/images/facebook.svg";
import ViberSvg from "../../assets/images/viber.svg";
import "./Footer.scss";
import googlePlayPng from "../../assets/images/google-play.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__column-container-1">
        <div className="footer__contacts">
          <div className="footer__phone-info">
            <PhoneSvg className="footer__contact-icon" />
            <PhoneInfo />
          </div>
          <div className="footer__email-info">
            <MailSvg className="footer__contact-icon" />
            <a className="footer__email" href="mailto:info@creditplus.ua">
              info@creditplus.ua
            </a>
          </div>
          <div className="footer__working-hours-info">
            <ClockSvg className="footer__contact-icon" />
            <span className="footer__working-hours">
              Пн-Пт: 8:00 - 23:00, Сб-Нд: 9:00 - 21:00
            </span>
          </div>
          <div className="footer__complain-info">
            З'явилися скарги на сервіс?{" "}
            <a href="#" className="footer__napishite-nam">
              Напишіть нам
            </a>
          </div>
        </div>

        <div className="footer__social">
          <div className="footer__mobile-info">
            <span>Керуйте кредитом через додаток CreditPlus</span>
            <a href="#">
              <img src={googlePlayPng} />
            </a>
          </div>
          <div className="footer__socials-info">
            <span>Ексклюзивні промокоди, розіграші та акції в соцмережах:</span>
            <a href="#">
              <FacebookSvg />
            </a>
            <a href="#">
              <ViberSvg />
            </a>
          </div>
        </div>

        <div className="footer__useful-links">
          <div className="footer__links">
            <Link to="/for-partners">Партнерам</Link>
            <Link to="/news">Новини</Link>
            <Link to="/documents">Документи</Link>
            <Link to="/contacts">Контакти</Link>
          </div>

          <div className="footer__documents">
            <a className="footer__document" href="#">
              Згода на обробку даних
            </a>
            <a className="footer__document" href="#">
              Правила
            </a>
            <a className="footer__document" href="#">
              Конфіденційність
            </a>
            <a className="footer__document" href="#">
              Публічна інформація
            </a>
            <a className="footer__document" href="#">
              Типовий договір
            </a>
          </div>
        </div>
      </div>

      <div className="footer__column-container-2">
        <span>
          «АВЕНТУС УКРАЇНА» ЄДРПОУ 41078230. 03062, м. Київ, проспект Перемоги,
          90-А{" "}
        </span>
        <span>
          Свідоцтво про реєстрацію Фінансової установи серія ФК №870 від
          28.02.2017 Ліцензія № 756 НКФП від 28.03.2017 Ліцензія № 1860 НКФП від
          24.09.2019
        </span>
      </div>
    </footer>
  );
}

export default Footer;
