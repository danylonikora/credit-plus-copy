import React from "react";
import TabBox from "../../common/TabBox/TabBox";
import * as styles from "./CreditInfo.module.scss";
import useTranslation from "../../../utils/useTranslation";

function CreditInfo() {
  const { CreditInfo: t } = useTranslation();

  function generateContentGroups(contentSource) {
    return contentSource.map((content, i) => (
      <div className={styles.creditInfo__contentGroup} key={content.heading}>
        <div className={styles.creditInfo__step}>{i + 1}</div>
        <div className={styles.creditInfo__textContainer}>
          <div className={styles.creditInfo__heading}>{content.heading}</div>
          <div className={styles.creditInfo__paragraph}>
            {content.paragraph}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section className={styles.creditInfo}>
      <TabBox
        firstTabHeader={t.heading1}
        secondTabHeader={t.heading2}
        firstTabContent={generateContentGroups(t.takeOnline)}
        secondTabContent={generateContentGroups(t.repayOnline)}
        contentClassName={styles.tabBox__content}
      />
    </section>
  );
}

export default CreditInfo;
