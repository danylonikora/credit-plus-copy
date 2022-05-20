import React from "react";
import * as styles from "./AboutService.module.scss";
import useTranslation from "../../../utils/useTranslation";

function AboutService() {
  const { AboutService: t } = useTranslation();

  return (
    <section className={styles.aboutService}>
      <h2 className={styles.aboutService__heading}>
        {t.heading}
      </h2>
      <div className="markdown">
        <p>{t.paragraph}</p>
        <h4>{t.heading1}</h4>
        <p>{t.paragraph1_1}</p>
        <ul>
          {t.ul1.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
        <p>{t.paragraph1_2}</p>
        <h4>{t.heading2}</h4>
        <p>{t.paragraph2_1}</p>
        <p>{t.paragraph2_2}</p>
        <h4>{t.heading3}</h4>
        <ul>
          {t.ul2.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
        <h4>{t.heading4}</h4>
        <ol>
          {t.ol1.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ol>
        <h4>{t.heading5}</h4>
        <p>{t.paragraph5_1}</p>
        <p>{t.paragraph5_2}</p>
        <h4>{t.heading6}</h4>
        <ul>
          {t.ul3.map((text, i) => (
            <li key={i}>
              <a href="#" className="markdown__link">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <h4>{t.heading7}</h4>
        <p>{t.paragraph7_1}</p>
        <p>{t.paragraph7_2}</p>
        <h4>{t.heading8}</h4>
        <p>{t.paragraph8_1}</p>
        <p>{t.paragraph8_2}</p>
        <h4>{t.heading9}</h4>
        <ul>
          {t.ul4.map((text, i) => {
            if (i === 0) {
              return (
                <li key={i}>
                  <a href="#" className="markdown__link">
                    {text}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={i} className="markdown__bold">
                  {text}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default AboutService;
