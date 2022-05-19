import React from "react";
import * as styles from "./PhoneInfo.module.scss";
import useTranslation from "../../../utils/useTranslation";

function PhoneInfo({ color }) {
  const { PhoneInfo: t } = useTranslation();

  return (
    <div className={styles.phoneInfo} style={{ color: color || "#fff" }}>
      <a
        className={styles.phoneInfo__number}
        href="tel:0800753363"
        title={t.callUs}
      >
        0 800 753 363
      </a>
      <span>{t.freeAcrossUkraine}</span>
    </div>
  );
}

export default PhoneInfo;
