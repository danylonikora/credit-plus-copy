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
import locales from "../../locales";

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
              {locales.footer.workingHours}
            </span>
          </div>
          <div className="footer__complain-info">
            {locales.footer.complaint}{" "}
            <a href="#" className="footer__napishite-nam">
              {locales.footer.writeUs}
            </a>
          </div>
        </div>

        <div className="footer__social">
          <div className="footer__mobile-info">
            <span>{locales.footer.useApp}</span>
            <a href="#">
              <img src={googlePlayPng} />
            </a>
          </div>
          <div className="footer__socials-info">
            <span>{locales.footer.socials}</span>
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
            {locales.footer.usefulLinks.map((link) => (
              <Link to={link.to} key={link.content}>
                {link.content}
              </Link>
            ))}
          </div>

          <div className="footer__documents">
            {locales.footer.documents.map((doc) => (
              <a className="footer__document" href="#" key={doc}>
                {doc}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__column-container-2">
        <span>{locales.footer.legal1}</span>
        <span>{locales.footer.legal2}</span>
      </div>
    </footer>
  );
}

export default Footer;
