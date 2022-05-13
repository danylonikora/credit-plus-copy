import React from "react";
import KievstarSvg from "../../assets/images/kievstar.svg";
import PciDssSvg from "../../assets/images/pci-dss.svg";
import UbkiSvg from "../../assets/images/ubki.svg";
import EasyPaySvg from "../../assets/images/easy-pay.svg";
import VisaSvg from "../../assets/images/visa.svg";
import BankId from "../../assets/images/bankid.svg";
import ComodoSvg from "../../assets/images/comodo.svg";
import NationalBankSvg from "../../assets/images/national-bank.svg";
import IboxSvg from "../../assets/images/ibox.svg";
import MbkiSvg from "../../assets/images/mbki.svg";
import IpaySvg from "../../assets/images/ipay.svg";
import "./Partners.scss";
import locales from "../../locales";

function Partners() {
  return (
    <section className="partners">
      <h2 className="partners__heading">{locales.partners.heading}</h2>
      <div className="partners__container">
        <div className="partners__partner-logo-container">
          <KievstarSvg />
        </div>
        <div className="partners__partner-logo-container">
          <PciDssSvg />
        </div>
        <div className="partners__partner-logo-container">
          <UbkiSvg />
        </div>
        <div className="partners__partner-logo-container">
          <EasyPaySvg />
        </div>
        <div className="partners__partner-logo-container">
          <VisaSvg />
        </div>
        <div className="partners__partner-logo-container">
          <BankId />
        </div>
        <div className="partners__partner-logo-container">
          <NationalBankSvg />
        </div>
        <div className="partners__partner-logo-container">
          <ComodoSvg />
        </div>
        <div className="partners__partner-logo-container">
          <IboxSvg />
        </div>
        <div className="partners__partner-logo-container">
          <MbkiSvg />
        </div>
        <div className="partners__partner-logo-container">
          <IpaySvg />
        </div>
      </div>
    </section>
  );
}

export default Partners;
