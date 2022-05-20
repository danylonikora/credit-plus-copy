import React, { useState, useEffect, useRef } from "react";
import isMediaMatch from "../../../utils/isMediaMatch";
import ArrowSvg from "/public/images/lending-services-right-arrow.svg";
import * as styles from "./LendingServices.module.scss";
import Link from "next/link";
import useTranslation from "../../../utils/useTranslation";

function LendingServices() {
  const [isPhone, setIsPhone] = useState();
  const [isShowMore, setIsShowMore] = useState(false);
  const { LendingServices: t } = useTranslation();

  const showMoreRef = useRef();
  const linksMobileRef = useRef();

  useEffect(() => {
    setIsPhone(isMediaMatch(500));

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
    <section className={styles.lendingServices}>
      <h2 className={styles.lendingServices__heading}>{t.heading}</h2>
      {!isPhone && (
        <div className={styles.lendingServices__links}>
          {t.links.map((link) => (
            <Link key={link.content} href={link.to}>
              <a className={styles.lendingServices__link}>{link.content}</a>
            </Link>
          ))}
        </div>
      )}
      {isPhone && (
        <>
          <div
            className={styles.lendingServices__mobileLinks}
            ref={linksMobileRef}
          >
            {t.links.map((link) => (
              <Link key={link.content} href={link.to}>
                <a className={styles.lendingServices__mobileLink}>
                  <span>{link.content}</span>
                  <ArrowSvg />
                </a>
              </Link>
            ))}
          </div>
          <span className={styles.lendingServices__showMore} ref={showMoreRef}>
            {isShowMore ? t.showLess : t.showMore}
          </span>
        </>
      )}
    </section>
  );
}

export default LendingServices;
