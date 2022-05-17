import React from "react";
import locales from "../../locales";
import DocumentSvg from "../../assets/images/document-icon.svg";
import "./About.scss";

function About() {
  return (
    <main>
      <section className="about">
        <h4 className="about__heading">{locales.about.h2}</h4>
        <div className="markdown">
          <p>{locales.about.p1_1}</p>
          <p>{locales.about.p1_2}</p>
          <div className="about__paragraph-wrapper">
            <div className="about__paragraph-container">
              <p>{locales.about.p1_3}</p>
            </div>
            <div className="about__link-container">
              <a href="#" className="markdown__link markdown__bold">
                <DocumentSvg />
                {locales.about.a1}
              </a>
            </div>
          </div>
          <div className="about__paragraph-wrapper">
            <div className="about__paragraph-container">
              <p>{locales.about.p1_4}</p>
            </div>
            <div className="about__link-container">
              <a href="#" className="markdown__link markdown__bold">
                <DocumentSvg />
                {locales.about.a2}
              </a>
            </div>
          </div>
          <h4>{locales.about.h4_1}</h4>
          <ul>
            {locales.about.ul1.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <p>{locales.about.p2_1}</p>
          <p>{locales.about.p2_2}</p>
          <h4>{locales.about.h4_2}</h4>
          <ul>
            {locales.about.ul2.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{locales.about.h4_3}</h4>
          <p>{locales.about.p3}</p>
          <ul>
            {locales.about.ul3.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{locales.about.h4_4}</h4>
          <p>{locales.about.p4_1}</p>
          <p>{locales.about.p4_2}</p>
          <h4>{locales.about.h4_5}</h4>
          <ul>
            {locales.about.ul4.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{locales.about.h4_6}</h4>
          <ul>
            {locales.about.ul5.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
          <h4>{locales.about.h4_7}</h4>
          <p>{locales.about.p7}</p>
        </div>
      </section>
    </main>
  );
}

export default About;
