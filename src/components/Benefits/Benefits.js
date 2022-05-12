import React from "react";
import TabBox from "../TabBox/TabBox";
import "./Benefits.scss";
import locales from "../../locales";

function Benefits() {
  function generateContentGroups(contentSource) {
    return contentSource.map((content) => {
      const Icon = require(`../../assets/images/${content.img}`).default;
      return (
        <div className="benefits__content-group" key={content.img}>
          <div className="benefits__image">
            <Icon width="7rem" height="7rem" viewBox="0 0 70 70" />
          </div>
          <span className="benefits__paragraph">{content.paragpraph}</span>
        </div>
      );
    });
  }

  return (
    <section className="benefits">
      <h2 className="benefits__header">{locales.benefits.heading}</h2>
      <TabBox
        firstTabHeader={locales.benefits.tabHeading1}
        secondTabHeader={locales.benefits.tabHeading2}
        firstTabContent={generateContentGroups(locales.benefits.newClient)}
        secondTabContent={generateContentGroups(locales.benefits.regularClient)}
      />
    </section>
  );
}

export default Benefits;
