import React from "react";
import "./AboutService.scss";
import locales from "../../locales";

function AboutService() {
  return (
    <section className="about-service">
      <h2 className="about-service__heading">{locales.aboutService.heading}</h2>
      <div className="markdown">
        <p>{locales.aboutService.content.paragraph}</p>
        <h4>{locales.aboutService.content.heading1}</h4>
        <p>{locales.aboutService.content.paragraph1_1}</p>
        <ul>
          {locales.aboutService.content.ul1.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <p>{locales.aboutService.content.paragraph1_2}</p>
        <h4>{locales.aboutService.content.heading2}</h4>
        <p>{locales.aboutService.content.paragraph2_1}</p>
        <p>{locales.aboutService.content.paragraph2_2}</p>
        <h4>{locales.aboutService.content.heading3}</h4>
        <ul>
          {locales.aboutService.content.ul2.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <h4>{locales.aboutService.content.heading4}</h4>
        <ol>
          {locales.aboutService.content.ol1.map((text) => (
            <li>{text}</li>
          ))}
        </ol>
        <h4>{locales.aboutService.content.heading5}</h4>
        <p>{locales.aboutService.content.paragraph5_1}</p>
        <p>{locales.aboutService.content.paragraph5_2}</p>
        <h4>{locales.aboutService.content.heading6}</h4>
        <ul>
          {locales.aboutService.content.ul3.map((text) => (
            <li>
              <a href="#" className="markdown__link">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <h4>{locales.aboutService.content.heading7}</h4>
        <p>{locales.aboutService.content.paragraph7_1}</p>
        <p>{locales.aboutService.content.paragraph7_2}</p>
        <h4>{locales.aboutService.content.heading8}</h4>
        <p>{locales.aboutService.content.paragraph8_1}</p>
        <p>{locales.aboutService.content.paragraph8_2}</p>
        <h4>{locales.aboutService.content.heading9}</h4>
        <ul>
          {locales.aboutService.content.ul4.map((text, i) => {
            if (i === 0) {
              return (
                <li>
                  <a href="#" className="markdown__link">
                    {text}
                  </a>
                </li>
              );
            } else {
              return <li className="markdown__bold">{text}</li>;
            }
          })}
        </ul>
      </div>
    </section>
  );
}

export default AboutService;