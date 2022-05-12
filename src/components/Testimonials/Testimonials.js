import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import Glide from "@glidejs/glide";
import isMediaMatch from "../../utils/isMediaMatch";
import LeftArrowSvg from "../../assets/images/glide-arrow-left.svg";
import RightArrowSvg from "../../assets/images/glide-arrow-right.svg";
import "./Testimonials.scss";
import locales from "../../locales";

function Testimonials() {
  const [isTablet, setIsTablet] = useState(isMediaMatch(900));
  const [isPhone, setIsPhone] = useState(isMediaMatch(600));

  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      perView: 3,
      bound: true,
      gap: 30,
      breakpoints: {
        900: { perView: 2, autoplay: 3000 },
        600: { perView: 1, autoplay: 3000 },
      },
    }).mount();

    document
      .querySelector(".glide")
      .addEventListener("mousedown", (event) => event.preventDefault());

    return () => glide.destroy();
  }, [isTablet, isPhone]);

  useEffect(() => {
    window
      .matchMedia("(max-width: 900px)")
      .addEventListener("change", (e) => setIsTablet(e.matches));

    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (e) => setIsPhone(e.matches));
  }, []);

  return (
    <section className="testimonials">
      <h2 className="testimonials__heading">{locales.testimonials.heading}</h2>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <div className="glide__slides">
            {locales.testimonials.reviews.map((content, i) => (
              <Review {...content} key={i} />
            ))}
          </div>
        </div>

        {!isTablet && (
          <div className="glide__arrows" data-glide-el="controls">
            <div className="glide__arrow glide__arrow--left" data-glide-dir="<">
              <LeftArrowSvg />
            </div>
            <div
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <RightArrowSvg />
            </div>
          </div>
        )}

        <div className="glide__bullets" data-glide-el="controls[nav]">
          <div className="glide__bullet" data-glide-dir="=0"></div>
          <div className="glide__bullet" data-glide-dir="=1"></div>
          <div className="glide__bullet" data-glide-dir="=2"></div>
          <div className="glide__bullet" data-glide-dir="=3"></div>
          {isTablet && (
            <div className="glide__bullet" data-glide-dir="=4"></div>
          )}
          {isPhone && <div className="glide__bullet" data-glide-dir="=4"></div>}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
