import React, { useTransition } from "react";
import * as styles from "./Conditions.module.scss";
import useTranslation from "../../../utils/useTranslation";

function Conditions() {
  const { Conditions: t } = useTranslation();

  return (
    <section className={styles.creditConditions}>
      <h2 className={styles.creditConditions__heading}>{t.heading}</h2>
      <div className={styles.creditConditions__tableContainer}>
        <table className={styles.conditionsTable}>
          <thead>
            <tr>
              {t.conditionsTable[0].map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.conditionsTable.slice(1).map((row, i) => {
              return (
                <tr key={i + 1}>
                  {row.map((text, i) => {
                    if (row.length === 2 && i === 1) {
                      return (
                        <td colSpan="2" key={text}>
                          {text}
                        </td>
                      );
                    }
                    return <td key={text}>{text}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Conditions;
