import React from "react";
import * as styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import PhoneInfo from "../../PhoneInfo/PhoneInfo";
import PhoneSvg from "/public/images/phone.svg";
import ClockSvg from "/public/images/clock.svg";
import MailSvg from "/public/images/mail.svg";
import FacebookSvg from "/public/images/facebook.svg";
import ViberSvg from "/public/images/viber.svg";
import googlePlayPng from "/public/images/google-play.png";
import usefulLinks from "../../../content/usefulLinks.json";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__columnContainer_1}>
        <div className={styles.footer__contacts}>
          <div className={styles.footer__phoneInfo}>
            <PhoneSvg className={styles.footer__contactIcon} />
            <PhoneInfo />
          </div>
          <div className={styles.footer__emailInfo}>
            <MailSvg className={styles.footer__contactIcon} />
            <a
              className={styles.footer__email}
              href="mailto:info@creditplus.ua"
            >
              info@creditplus.ua
            </a>
          </div>
          <div>
            <ClockSvg className={styles.footer__contactIcon} />
            <span>"Пн-Пт: 8:00 - 23:00, Сб-Нд: 9:00 - 21:00</span>
          </div>
          <div className={styles.footer__complainInfo}>
            З'явилися скарги на сервіс?{" "}
            <a href="#" className={styles.footer__writeToUs}>
              Напишіть нам
            </a>
          </div>
        </div>

        <div className={styles.footer__social}>
          <div className={styles.footer__mobileInfo}>
            <span>Керуйте кредитом через додаток CreditPlus</span>
            <a href="#">
              <Image
                src={googlePlayPng}
                title="Google Play"
                alt="Google Play"
              />
            </a>
          </div>
          <div>
            <span>Ексклюзивні промокоди, розіграші та акції в соцмережах:</span>
            <div className={styles.footer__socialIconsContainer}>
              <a href="#" title="Facebook">
                <FacebookSvg />
              </a>
              <a href="#" title="Viber">
                <ViberSvg />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer__usefulLinks}>
          <div className={styles.footer__links}>
            {usefulLinks.map((link) => (
              <Link href={link.to} key={link.content}>
                <a>{link.content}</a>
              </Link>
            ))}
          </div>

          <div className={styles.footer__documents}>
            {[
              "Згода на обробку даних",
              "Правила",
              "Конфіденційність",
              "Публічна інформація",
              "Типовий договір",
            ].map((doc) => (
              <a href="#" key={doc}>
                {doc}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer__columnContainer_2}>
        {[
          "«АВЕНТУС УКРАЇНА» ЄДРПОУ 41078230. 03062, м. Київ, проспект Перемоги, 90-А",
          "Свідоцтво про реєстрацію Фінансової установи серія ФК №870 від 28.02.2017 Ліцензія № 756 НКФП від 28.03.2017 Ліцензія № 1860 НКФП від 24.09.2019",
        ].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
