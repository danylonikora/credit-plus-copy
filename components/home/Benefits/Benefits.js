import React from "react";
import TabBox from "../../common/TabBox/TabBox";
import * as styles from "./Benefits.module.scss";
import useTranslation from "../../../utils/useTranslation";

function Benefits() {
  const { Benefits: t } = useTranslation();

  function generateContentGroups(contentSource) {
    return contentSource.map((content) => {
      const Icon = require(`/public/images/${content.img}`).default;
      return (
        <div className={styles.benefits__contentGroup} key={content.img}>
          <div>
            <Icon width="7rem" height="7rem" viewBox="0 0 70 70" />
          </div>
          <span>{content.paragpraph}</span>
        </div>
      );
    });
  }

  return (
    <section className={styles.benefits}>
      <h2 className={styles.benefits__header}>{t.heading}</h2>
      <TabBox
        firstTabHeader={t.tabHeading1}
        secondTabHeader={t.tabHeading2}
        firstTabContent={generateContentGroups(t.newClient)}
        secondTabContent={generateContentGroups(t.regularClient)}
        contentClassName={styles.tabBox__content}
      />
    </section>
  );
}

export default Benefits;
