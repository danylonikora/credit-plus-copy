import React, { useState, useEffect, useRef } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import formatCurrency from "../../utils/formatCurrency";
import CrossSvg from "../../assets/images/burger-menu-close.svg";
import PromoSuccessSvg from "../../assets/images/conditions-promo-success.svg";
import "./Calculator.scss";
import locales from "../../locales";
import calculateInterest from "../../utils/calculateInterest";
import formatDate from "../../utils/formatDate";

function Calculator(props) {
  // initialSum, initialDays

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
    const errorClass = "conditions__promo-input--error";
    promoCodeInputRef.current.classList.add(errorClass);
  }, [promoCodeError]);

  return (
    <div className="calculator">
      <div className="calculator__sliders-container">
        <div className="slider">
          <div className="slider__info-container">
            <span className="slider__name">{locales.calculator.sum}</span>
            <span className="slider__value">
              {sum}
              <span className="slider__unit">
                {" "}
                {locales.calculator.shortCurrency}
              </span>
            </span>
          </div>
          <RangeSlider
            min={500}
            max={15000}
            step={100}
            name="sum"
            value={sum}
            handleChange={setSum}
            unit={locales.calculator.shortCurrency}
          />
        </div>

        <div className="slider">
          <div className="slider__info-container">
            <span className="slider__name">
              {locales.calculator.paymentTerm}
            </span>
            <span className="slider__value">
              {days}
              <span className="slider__unit"> {locales.calculator.days}</span>
            </span>
          </div>
          <RangeSlider
            min={3}
            max={15}
            step={1}
            name="days"
            value={days}
            handleChange={setDays}
            unit={locales.calculator.days}
          />
        </div>
      </div>
      <div className="conditions">
        <div className="condition">
          <span className="condition__name">{locales.calculator.take}</span>
          <span className="condition__amount">{formatCurrency(sum)}</span>
        </div>
        <div className="condition">
          <span className="condition__name">
            {locales.calculator.percentages}
          </span>
          <span className="condition__amount">
            {formatCurrency(calculateInterest(sum, days, discount))}
          </span>
        </div>
        <div className="condition">
          <span className="condition__name">
            {locales.calculator.repayTo}{" "}
            {formatDate(Date.now() + days * 1000 * 60 * 60 * 24)}
          </span>
          <span className="condition__amount">
            {formatCurrency(calculateInterest(sum, days, discount) + sum)}
          </span>
        </div>
        <a href="#" className="conditions__btn-get-money">
          {locales.calculator.getMoney}
        </a>
        {promoCodeInput && (
          <div className="conditions__promo-input-container">
            <input
              className="conditions__promo-input"
              ref={promoCodeInputRef}
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={locales.calculator.promoCode}
            />
            <CrossSvg
              className="conditions__close-promo"
              onClick={() => {
                setPromoCodeInput(false);
                setPromoCode("GET DISCOUNT");
                setPromoCodeError(false);
              }}
            />
            {promoCodeError && (
              <span className="conditions__promo-error">
                {locales.calculator.invalidPromoCode}
              </span>
            )}
          </div>
        )}

        {discount ? (
          <div className="conditions__success-container">
            <PromoSuccessSvg className="conditions__success-icon" />
            <span className="conditions__promo-success">
              {locales.calculator.usedPromoCode}
            </span>
          </div>
        ) : (
          <span
            className="conditions__promo"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key !== "Enter") return;
              promoCodeInput ? validatePromoCode() : setPromoCodeInput(true);
            }}
            onClick={() =>
              promoCodeInput ? validatePromoCode() : setPromoCodeInput(true)
            }
          >
            {promoCodeInput
              ? locales.calculator.usePromoCode
              : locales.calculator.havePromoCode}
          </span>
        )}
      </div>
    </div>
  );
}

export default Calculator;
