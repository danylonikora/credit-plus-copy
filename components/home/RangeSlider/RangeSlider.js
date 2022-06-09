import React, { useEffect, useRef } from "react";
import MinusSvg from "/public/images/slider-minus.svg";
import PlusSvg from "/public/images/slider-plus.svg";
import * as styles from "./RangeSlider.module.scss";

function RangeSlider(props) {
  // value, handleChange, step, max, min, name, unit, label

  const inputRef = useRef();

  const selectedColor = "#346DA6";
  const unselectedColor = "#E0E9F2";

  function validate(value) {
    if (value > props.max) {
      return props.max;
    } else if (value < props.min) {
      return props.min;
    }
    return value;
  }

  // Selected effect
  useEffect(() => {
    const selectedSegment =
      ((inputRef.current.value - props.min) * 100) / (props.max - props.min);
    const roundedSelectedSegment =
      selectedSegment > 50 ? selectedSegment - 0.4 : selectedSegment + 0.4;
    inputRef.current.style.background = `linear-gradient(
      to right, 
      ${selectedColor} 0%, ${selectedColor} ${roundedSelectedSegment}%, 
      ${unselectedColor} ${roundedSelectedSegment}%, ${unselectedColor} 100%
    )`;
  }, [props.value, props.max, props.min]);

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.rangeSlider__container}>
        <div
          data-testid="minus"
          className={styles.rangeSlider__control}
          onClick={() =>
            props.handleChange((prev) => validate(prev - props.step))
          }
        >
          <MinusSvg />
        </div>
        <input
          ref={inputRef}
          className={styles.rangeSlider__track}
          type="range"
          value={props.value}
          max={props.max}
          min={props.min}
          step={props.step}
          name={props.name}
          onChange={(event) => props.handleChange(+event.target.value)}
        />
        <div
          className={styles.rangeSlider__control}
          data-testid="plus"
          onClick={() =>
            props.handleChange((prev) => validate(prev + props.step))
          }
        >
          <PlusSvg />
        </div>
      </div>
      <div className={styles.rangeSlider__boundaries}>
        <span>{props.min + " " + props.unit}</span>
        <span>{props.max + " " + props.unit}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
