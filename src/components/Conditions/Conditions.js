import React from "react";
import "./Conditions.scss";
import locales from "../../locales";

function Conditions() {
  return (
    <section className="credit-conditions">
      <h2 className="credit-conditions__heading">{locales.conditions.heading}</h2>
      <div style={{ overflowX: "auto" }}>
        <table className="conditions-table">
          <thead>
            <tr>
              {locales.conditions.conditionsTable[0].map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {locales.conditions.conditionsTable.slice(1).map((row, i) => {
              return (
                <tr key={i + 1}>
                  {row.map((text, i) => {
                    if (row.length === 2 && i === 1) {
                      return <td colSpan="2" key={text}>{text}</td>;
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
