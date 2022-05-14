import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import isMediaMatch from "../../utils/isMediaMatch";
import ArrowSvg from "../../assets/images/lending-services-right-arrow.svg";
import "./LendingServices.scss";
import locales from "../../locales";

function LendingServices() {
  const [isPhone, setIsPhone] = useState(isMediaMatch(500));
  const [isShowMore, setIsShowMore] = useState(false);

  const showMoreRef = useRef();
  const linksMobileRef = useRef();

  useEffect(() => {
    window
      .matchMedia("(max-width: 500px)")
      .addEventListener("change", (e) => setIsPhone(e.matches));
  }, []);

  useEffect(() => {
    if (!showMoreRef.current) return;

    showMoreRef.current.addEventListener("click", handleClick);
    function handleClick() {
      setIsShowMore((prev) => !prev);
    }

    if (isShowMore) {
      linksMobileRef.current.style.height = "auto";
    } else {
      linksMobileRef.current.style.height = "180px";
    }

    return () => {
      if (!showMoreRef.current) return;
      showMoreRef.current.removeEventListener("click", handleClick);
    };
  }, [isShowMore, isPhone]);

  return (
    <section className="lending-services">
      <h2 className="lending-services__heading">
        {locales.lendingServices.heading}
      </h2>
      {!isPhone && (
        <div className="lending-services__links">
          {locales.lendingServices.lendingServicesLinks.map((link) => (
            <Link
              className="lending-services__link"
              to={link.link}
              key={link.content}
            >
              {link.content}
            </Link>
          ))}
        </div>
      )}
      {isPhone && (
        <>
          <div className="lending-services__links--mobile" ref={linksMobileRef}>
            {locales.lendingServices.lendingServicesLinks.map((link) => (
              <Link
                className="lending-services__link--mobile"
                to={link.link}
                key={link.content}
              >
                <span>{link.content}</span>
                <ArrowSvg className="lending-services__right-arrow-icon" />
              </Link>
            ))}
          </div>
          <span className="lending-services__show-more" ref={showMoreRef}>
            {isShowMore
              ? locales.lendingServices.showLess
              : locales.lendingServices.showMore}
          </span>
        </>
      )}
    </section>
  );
}

export default LendingServices;
