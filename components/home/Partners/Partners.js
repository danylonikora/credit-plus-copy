import React, { useEffect, useState, useRef } from "react";
import * as styles from "./Partners.module.scss";
import useTranslation from "../../../utils/useTranslation";
import Svg from "../../common/Svg/Svg";

function Partners() {
  const { Partners: t } = useTranslation();

  return (
    <section className={styles.partners}>
      <h2 className={styles.partners__heading}>{t.heading}</h2>
      <div className={styles.partners__container}>
        {t.images.map((fileName) => {
          return (
            <div
              key={fileName}
              className={styles.partners__partnerLogoContainer}
            >
              <Svg name={fileName} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
