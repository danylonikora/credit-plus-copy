import React from "react";
import newClient from "../../content/newClient.json";
import regularClient from "../../content/regularClient.json";
import TabBox from "../TabBox/TabBox";
import "./Benefits.scss";

function Benefits() {
  function generateContentGroups(contentSource) {
    return contentSource.map((content) => {
      const Icon = require(`../../assets/images/${content.img}`).default;
      return (
        <div className="benefits__content-group" key={content.img}>
          <div className="benefits__image">
            <Icon
              width="7rem"
              height="7rem"
              viewBox="0 0 70 70"
            />
          </div>
          <span className="benefits__paragraph">{content.paragpraph}</span>
        </div>
      );
    });
  }

  return (
    <section className="benefits">
      <h2 className="benefits__header">Наші переваги</h2>
      <TabBox
        firstTabHeader="Новим клієнтам"
        secondTabHeader="Постійним клієнтам"
        firstTabContent={generateContentGroups(newClient)}
        secondTabContent={generateContentGroups(regularClient)}
      />
    </section>
  );
}

export default Benefits;
