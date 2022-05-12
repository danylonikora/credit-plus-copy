import React from "react";
import TabBox from "../TabBox/TabBox";
import "./CreditInfo.scss";
import locales from "../../locales";

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
        firstTabHeader={locales.creditInfo.heading1}
        secondTabHeader={locales.creditInfo.heading2}
        firstTabContent={generateContentGroups(locales.creditInfo.takeOnline)}
        secondTabContent={generateContentGroups(locales.creditInfo.repayOnline)}
      />
    </section>
  );
}

export default CreditInfo;
