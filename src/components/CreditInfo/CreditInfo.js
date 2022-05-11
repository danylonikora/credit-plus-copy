import React from "react";
import TabBox from "../TabBox/TabBox";
import takeOnline from "../../content/takeOnline.json";
import repayOnline from "../../content/repayOnline.json";
import "./CreditInfo.scss";

function CreditInfo() {
  function generateContentGroups(contentSource) {
    return contentSource.map((content, i) => (
      <div className="credit-info__content-group" key={content.heading}>
        <div className="credit-info__step">{i + 1}</div>
        <div className="credit-info__text-container">
          <div className="credit-info__heading">{content.heading}</div>
          <div className="credit-info__paragraph">{content.paragraph}</div>
        </div>
      </div>
    ));
  }

  return (
    <section className="credit-info">
      <TabBox
        firstTabHeader="Як взяти кредит онлайн"
        secondTabHeader="Як повернути кредит онлайн"
        firstTabContent={generateContentGroups(takeOnline)}
        secondTabContent={generateContentGroups(repayOnline)}
      />
    </section>
  );
}

export default CreditInfo;
