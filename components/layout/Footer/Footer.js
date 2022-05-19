import React from "react";
import * as styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import PhoneInfo from "../../common/PhoneInfo/PhoneInfo";
import PhoneSvg from "/public/images/phone.svg";
import ClockSvg from "/public/images/clock.svg";
import MailSvg from "/public/images/mail.svg";
import FacebookSvg from "/public/images/facebook.svg";
import ViberSvg from "/public/images/viber.svg";
import googlePlayPng from "/public/images/google-play.png";
import useTranslation from "../../../utils/useTranslation";

function Footer() {
  const { Footer: t } = useTranslation();

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
            <span>{t.workingHours}</span>
          </div>
          <div className={styles.footer__complainInfo}>
            {t.haveComplain}{" "}
            <a href="#" className={styles.footer__writeToUs}>
              {t.writeUs}
            </a>
          </div>
        </div>

        <div className={styles.footer__social}>
          <div className={styles.footer__mobileInfo}>
            <span>{t.manageWithApp}</span>
            <a href="#">
              <Image
                src={googlePlayPng}
                title="Google Play"
                alt="Google Play"
              />
            </a>
          </div>
          <div>
            <span>{t.specialInSocials}</span>
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
            {t.usefulLinks.map((link) => (
              <Link href={link.to} key={link.content}>
                <a>{link.content}</a>
              </Link>
            ))}
          </div>

          <div className={styles.footer__documents}>
            {t.documents.map((doc) => (
              <a href="#" key={doc}>
                {doc}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.footer__columnContainer_2}>
        {t.legal.map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
