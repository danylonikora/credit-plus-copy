import React from "react";
import * as styles from "./Partners.module.scss";
import KievstarSvg from "/public/images/partners/kievstar.svg";
import PciDssSvg from "/public/images/partners/pci-dss.svg";
import UbkiSvg from "/public/images/partners/ubki.svg";
import EasyPaySvg from "/public/images/partners/easy-pay.svg";
import VisaSvg from "/public/images/partners/visa.svg";
import BankId from "/public/images/partners/bankid.svg";
import ComodoSvg from "/public/images/partners/comodo.svg";
import NationalBankSvg from "/public/images/partners/national-bank.svg";
import IboxSvg from "/public/images/partners/ibox.svg";
import MbkiSvg from "/public/images/partners/mbki.svg";
import IpaySvg from "/public/images/partners/ipay.svg";
import useTranslation from "../../../utils/useTranslation";

function Partners() {
  const { Partners: t } = useTranslation();

  return (
    <section className={styles.partners}>
      <h2 className={styles.partners__heading}>{t.heading}</h2>
      <div className={styles.partners__container}>
        <div className={styles.partners__partnerLogoContainer}>
          <KievstarSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <PciDssSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <UbkiSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <EasyPaySvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <VisaSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <BankId />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <NationalBankSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <ComodoSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <IboxSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <MbkiSvg />
        </div>
        <div className={styles.partners__partnerLogoContainer}>
          <IpaySvg />
        </div>
      </div>
    </section>
  );
}

export default Partners;
