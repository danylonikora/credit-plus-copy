import React from "react";
import TabBox from "../common/TabBox/TabBox";
import useTranslation from "../../utils/useTranslation";
import * as styles from "./Documents.module.scss";
import DocumentSvg from "../../public/images/document-icon.svg";
function Documents() {
  const { Documents: t } = useTranslation();

  const firstTabContent = (
    <div className={styles.tabContentContainer}>
      <div className={styles.columnsContainer}>
        <div className={styles.columnContainer}>
          <h2 className={styles.secondaryHeading}>{t.firstTab.h2_1}</h2>
          {t.firstTab.firstColumnLinks_1.map((link) => (
            <a key={link} className={styles.link} href="#">
              {link}
            </a>
          ))}
          <h2 className={styles.secondaryHeading}>{t.firstTab.h2_2}</h2>
          {t.firstTab.firstColumnLinks_2.map((link) => (
            <a key={link} className={styles.link} href="#">
              {link}
            </a>
          ))}
        </div>
        <div className={styles.columnContainer}>
          <h2 className={styles.secondaryHeading}>{t.firstTab.h2_3}</h2>
          {t.firstTab.secondColumnLinks.map((link) => (
            <a key={link} className={styles.link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.documentsArchiveContainer}>
        <DocumentSvg />
        <a className={styles.documentsArchive}>{t.firstTab.documentsArchive}</a>
      </div>
    </div>
  );

  const secondTabContent = (
    <div className={styles.tabContentContainer}>
      <div className={styles.columnsContainer}>
        <div className={styles.columnContainer}>
          <h2 className={styles.secondaryHeading}>{t.secondTab.heading}</h2>
          {t.secondTab.links.map((link) => (
            <a key={link} className={styles.link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.documentsArchiveContainer}>
        <DocumentSvg />
        <a className={styles.documentsArchive}>
          {t.secondTab.legalDocumentsArchive}
        </a>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{t.heading}</h1>
      <TabBox
        firstTabHeader={t.firstTab.heading}
        secondTabHeader={t.secondTab.heading}
        firstTabContent={firstTabContent}
        secondTabContent={secondTabContent}
      />
    </div>
  );
}

export default Documents;
