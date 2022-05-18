import React, { useState, useEffect, useRef } from "react";
import isMediaMatch from "../../../utils/isMediaMatch";
import ArrowSvg from "/public/images/lending-services-right-arrow.svg";
import * as styles from "./LendingServices.module.scss";
import lendingServicesLinks from "../../../content/lendingServicesLinks.json";
import Link from "next/link";

function LendingServices() {
  const [isPhone, setIsPhone] = useState();
  const [isShowMore, setIsShowMore] = useState(false);

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
      <h2 className={styles.lendingServices__heading}>Послуги кредитування</h2>
      {!isPhone && (
        <div className={styles.lendingServices__links}>
          {lendingServicesLinks.map((link) => (
            <Link key={link.content} href={link.link}>
              <a className={styles.lendingServices__link}>{link.content}</a>
            </Link>
          ))}
        </div>
      )}
      {isPhone && (
        <>
          <div className={styles.mobileLinks} ref={linksMobileRef}>
            {lendingServicesLinks.map((link) => (
              <Link key={link.content} href={link.link}>
                <a className={styles.mobileLink}>
                  <span>{link.content}</span>
                  <ArrowSvg />
                </a>
              </Link>
            ))}
          </div>
          <span className={styles.lendingServices__showMore} ref={showMoreRef}>
            {isShowMore ? "Показати менше" : "Показати більше"}
          </span>
        </>
      )}
    </section>
  );
}

export default LendingServices;
