import React, { useState, useEffect, useRef } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import formatCurrency from "../../utils/formatCurrency";
import CrossSvg from "../../assets/images/burger-menu-close.svg";
import PromoSuccessSvg from "../../assets/images/conditions-promo-success.svg";
import "./Calculator.scss";

function Calculator() {
  const [sum, setSum] = useState(5000);
  const [days, setDays] = useState(15);
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
            <span className="slider__name">Cума:</span>
            <span className="slider__value">
              {sum}
              <span className="slider__unit"> грн</span>
            </span>
          </div>
          <RangeSlider
            min={500}
            max={15000}
            step={100}
            name="sum"
            value={sum}
            handleChange={setSum}
            unit="грн"
          />
        </div>

        <div className="slider">
          <div className="slider__info-container">
            <span className="slider__name">Строк платежу:</span>
            <span className="slider__value">
              {days}
              <span className="slider__unit"> днів</span>
            </span>
          </div>
          <RangeSlider
            min={3}
            max={15}
            step={1}
            name="days"
            value={days}
            handleChange={setDays}
            unit="днів"
          />
        </div>
      </div>
      <div className="conditions">
        <div className="condition">
          <span className="condition__name">Берете</span>
          <span className="condition__amount">{formatCurrency(sum)}</span>
        </div>
        <div className="condition">
          <span className="condition__name">Відсотки</span>
          <span className="condition__amount">
            {formatCurrency(
              ((days * (discount ? 0.01 : 0.5)) / 100 + 1) * sum - sum
            )}
          </span>
        </div>
        <div className="condition">
          <span className="condition__name">
            Віддаєте до{" "}
            {new Date(
              Date.now() + days * 1000 * 60 * 60 * 24
            ).toLocaleDateString("uk-UA")}
          </span>
          <span className="condition__amount">
            {formatCurrency(((days * (discount ? 0.01 : 0.5)) / 100 + 1) * sum)}
          </span>
        </div>
        <a href="#" className="conditions__btn-get-money">
          Отримати гроші
        </a>
        {promoCodeInput && (
          <div className="conditions__promo-input-container">
            <input
              className="conditions__promo-input"
              ref={promoCodeInputRef}
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Промокод"
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
                Зазначений промокод не знайдений або не дійсний
              </span>
            )}
          </div>
        )}

        {discount ? (
          <div className="conditions__success-container">
            <PromoSuccessSvg className="conditions__success-icon" />
            <span className="conditions__promo-success">
              Промокод застосовано
            </span>
          </div>
        ) : (
          <span
            className="conditions__promo"
            onClick={() =>
              promoCodeInput ? validatePromoCode() : setPromoCodeInput(true)
            }
          >
            {promoCodeInput ? "Застосувати" : "Маю промокод"}
          </span>
        )}
      </div>
    </div>
  );
}

export default Calculator;
