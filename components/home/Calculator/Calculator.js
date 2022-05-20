import React, { useState, useEffect, useRef } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import formatCurrency from "../../../utils/formatCurrency";
import CrossSvg from "/public/images/burger-menu-close.svg";
import PromoSuccessSvg from "/public/images/conditions-promo-success.svg";
import * as styles from "./Calculator.module.scss";
import calculateInterest from "../../../utils/calculateInterest";
import formatDate from "../../../utils/formatDate";
import useTranslation from "../../../utils/useTranslation";

function Calculator(props) {
  // initialSum, initialDays

  const { Calculator: t } = useTranslation();
  const [sum, setSum] = useState(props.initialSum);
  const [days, setDays] = useState(props.initialDays);
  const [promoCode, setPromoCode] = useState("GET DISCOUNT");
  const [promoCodeInput, setPromoCodeInput] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [promoCodeError, setPromoCodeError] = useState(false);

  const promoCodeInputRef = useRef();

  function validatePromoCode() {
    if (promoCode.toUpperCase() === "GET DISCOUNT") {
      setDiscount(true);
      setPromoCodeInput(false);
    } else {
      setPromoCodeError(true);
    }
  }

  useEffect(() => {
    if (!promoCodeError) return;
    const errorClass = styles.conditions__promoInputError;
    promoCodeInputRef.current.classList.add(errorClass);
  }, [promoCodeError]);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__slidersContainer}>
        <div className={styles.slider}>
          <div className={styles.slider__infoContainer}>
            <span>{t.sum}</span>
            <span className={styles.slider__value}>
              {sum}
              <span className={styles.slider__unit}> {t.shortCurrency}</span>
            </span>
          </div>
          <RangeSlider
            min={500}
            max={15000}
            step={100}
            name="sum"
            value={sum}
            handleChange={setSum}
            unit={t.shortCurrency}
          />
        </div>

        <div className={styles.slider}>
          <div className={styles.slider__infoContainer}>
            <span>{t.paymentTerm}</span>
            <span className={styles.slider__value}>
              {days}
              <span className={styles.slider__unit}> {t.days}</span>
            </span>
          </div>
          <RangeSlider
            min={3}
            max={15}
            step={1}
            name="days"
            value={days}
            handleChange={setDays}
            unit={t.days}
          />
        </div>
      </div>
      <div className={styles.conditions}>
        <div className={styles.condition}>
          <span className={styles.condition__name}>{t.take}</span>
          <span data-testid="calculator-value">{formatCurrency(sum)}</span>
        </div>
        <div className={styles.condition}>
          <span className={styles.condition__name}>{t.percentages}</span>
          <span data-testid="calculator-value">
            {formatCurrency(calculateInterest(sum, days, discount))}
          </span>
        </div>
        <div className={styles.condition}>
          <span className={styles.condition__name}>
            {t.repayTo} {formatDate(Date.now() + days * 1000 * 60 * 60 * 24)}
          </span>
          <span data-testid="calculator-value">
            {formatCurrency(calculateInterest(sum, days, discount) + sum)}
          </span>
        </div>
        <a href="#" className={styles.conditions__getMoneyBtn}>
          {t.getMoney}
        </a>
        {promoCodeInput && (
          <div className={styles.conditions__promoInputContainer}>
            <input
              className={styles.conditions__promoInput}
              ref={promoCodeInputRef}
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t.promoCode}
            />
            <CrossSvg
              className={styles.conditions__closePromo}
              onClick={() => {
                setPromoCodeInput(false);
                setPromoCode("GET DISCOUNT");
                setPromoCodeError(false);
              }}
            />
            {promoCodeError && (
              <span className={styles.conditions__promoError}>
                {t.invalidPromoCode}
              </span>
            )}
          </div>
        )}

        {discount ? (
          <div className={styles.conditions__successContainer}>
            <PromoSuccessSvg />
            <span className={styles.conditions__promoSuccess}>
              {t.usedPromoCode}
            </span>
          </div>
        ) : (
          <span
            className={styles.conditions__promo}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key !== "Enter") return;
              promoCodeInput ? validatePromoCode() : setPromoCodeInput(true);
            }}
            onClick={() =>
              promoCodeInput ? validatePromoCode() : setPromoCodeInput(true)
            }
          >
            {promoCodeInput ? t.usePromoCode : t.havePromoCode}
          </span>
        )}
      </div>
    </div>
  );
}

export default Calculator;
