import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import Glide from "@glidejs/glide";
import isMediaMatch from "../../../utils/isMediaMatch";
import LeftArrowSvg from "/public/images/glide-arrow-left.svg";
import RightArrowSvg from "/public/images/glide-arrow-right.svg";
import * as styles from "./Testimonials.module.scss";
import classNames from "classnames";
import useTranslation from "../../../utils/useTranslation";

function Testimonials() {
  const [isTablet, setIsTablet] = useState();
  const [isPhone, setIsPhone] = useState();
  const { Testimonials: t } = useTranslation();

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      classes: {
        nav: {
          active: styles.glide__activeBullet,
        },
      },
      perView: 3,
      bound: true,
      gap: 0,
      breakpoints: {
        1000: { perView: 2, autoplay: 3000 },
        650: { perView: 1, autoplay: 3000 },
      },
    }).mount();

    document
      .querySelector(".glide")
      .addEventListener("mousedown", (event) => event.preventDefault());

    return () => glide.destroy();
  }, [isTablet, isPhone]);

  useEffect(() => {
    setIsTablet(isMediaMatch(1000));
    setIsPhone(isMediaMatch(650));
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setIsTablet(e.matches));

    window
      .matchMedia("(max-width: 650px)")
      .addEventListener("change", (e) => setIsPhone(e.matches));
  }, []);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonials__heading}>{t.heading}</h2>
      <div className={classNames(styles.glide, "glide")}>
        <div
          className={classNames("glide__track", styles.glide__track)}
          data-glide-el="track"
        >
          <div className={classNames("glide__slides", styles.glide__slides)}>
            {t.reviews.map((content, i) => (
              <div key={i} className={styles.review}>
                <Review {...content} />
              </div>
            ))}
          </div>
        </div>

        {!isTablet && (
          <div className="glide__arrows" data-glide-el="controls">
            <div
              className={classNames(
                "glide__arrow",
                "glide__arrow--left",
                styles.glide__leftArrow,
                styles.glide__arrow
              )}
              data-glide-dir="<"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                event.target.dispatchEvent(new Event("click"));
              }}
            >
              <LeftArrowSvg />
            </div>
            <div
              className={classNames(
                "glide__arrow",
                "glide__arrow--right",
                styles.glide__rightArrow,
                styles.glide__arrow
              )}
              data-glide-dir=">"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                event.target.dispatchEvent(new Event("click"));
              }}
            >
              <RightArrowSvg />
            </div>
          </div>
        )}

        <div
          className={classNames("glide__bullets", styles.glide__bullets)}
          data-glide-el="controls[nav]"
        >
          <div
            className={classNames("glide__bullet", styles.glide__bullet)}
            data-glide-dir="=0"
          ></div>
          <div
            className={classNames("glide__bullet", styles.glide__bullet)}
            data-glide-dir="=1"
          ></div>
          <div
            className={classNames("glide__bullet", styles.glide__bullet)}
            data-glide-dir="=2"
          ></div>
          <div
            className={classNames("glide__bullet", styles.glide__bullet)}
            data-glide-dir="=3"
          ></div>
          {isTablet && (
            <div
              className={classNames("glide__bullet", styles.glide__bullet)}
              data-glide-dir="=4"
            ></div>
          )}
          {isPhone && (
            <div
              className={classNames("glide__bullet", styles.glide__bullet)}
              data-glide-dir="=4"
            ></div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
