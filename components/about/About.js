import React from "react";
import DocumentSvg from "/public/images/document-icon.svg";
import * as styles from "./About.module.scss";
import classNames from "classnames";
import useTranslation from "../../utils/useTranslation";

function About() {
  const { About: t } = useTranslation();

  return (
    <main>
      <section className={styles.about}>
        <h4 className={styles.about__heading}>{t.h2}</h4>
        <div className="markdown">
          <p>{t.p1_1}</p>
          <p>{t.p1_2}</p>
          <div className={styles.about__paragraphWrapper}>
            <div className={styles.about__paragraphContainer}>
              <p>{t.p1_3}</p>
            </div>
            <div className={styles.about__linkContainer}>
              <a
                href="#"
                className={classNames(
                  "markdown__link",
                  "markdown__bold",
                  styles.about__link
                )}
              >
                <DocumentSvg />
                {t.a1}
              </a>
            </div>
          </div>
          <div className={styles.about__paragraphWrapper}>
            <div className={styles.about__paragraphContainer}>
              <p>{t.p1_4}</p>
            </div>
            <div className={styles.about__linkContainer}>
              <a
                href="#"
                className={classNames(
                  "markdown__link",
                  "markdown__bold",
                  styles.about__link
                )}
              >
                <DocumentSvg />
                {t.a2}
              </a>
            </div>
          </div>
          <h4>{t.h4_1}</h4>
          <ul>
            {t.ul1.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <p>{t.p2_1}</p>
          <p>{t.p2_2}</p>
          <h4>{t.h4_2}</h4>
          <ul>
            {t.ul2.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{t.h4_3}</h4>
          <p>{t.p3}</p>
          <ul>
            {t.ul3.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{t.h4_4}</h4>
          <p>{t.p4_1}</p>
          <p>{t.p4_2}</p>
          <h4>{t.h4_5}</h4>
          <ul>
            {t.ul4.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{t.h4_6}</h4>
          <ul>
            {t.ul5.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{t.h4_7}</h4>
          <p>{t.p7}</p>
        </div>
      </section>
    </main>
  );
}

export default About;
