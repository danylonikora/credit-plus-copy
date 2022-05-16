import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RangeSlider from "../components/RangeSlider/RangeSlider";

let value;
const initialValue = 5;
const user = userEvent.setup();

function Parent({ initialValue }) {
  const [parentValue, setParentValue] = useState(initialValue);
  value = parentValue;

  return (
    <RangeSlider {...props} value={parentValue} handleChange={setParentValue} />
  );
}

const props = {
  max: 10,
  min: 1,
  step: 1,
  name: "input",
  unit: "грн",
};

beforeEach(() => {
  render(<Parent initialValue={initialValue} />);
});

describe("<RangeSlider />", () => {
  it("should render input inside it with correct given values", () => {
    const input = document.querySelector("input");
    expect(input).toBeVisible();
    expect(+input.value).toBe(initialValue);
    expect(input.name).toBe(props.name);
    expect(+input.step).toBe(props.step);
    expect(+input.min).toBe(props.min);
    expect(+input.max).toBe(props.max);
    expect(input.type).toBe("range");
    expect(input).toHaveClass("range-slider__range");
  });

  it("should properly change given value with given handleChange", () => {
    const input = document.querySelector("input");
    fireEvent.change(input, { target: { value: initialValue + 1 } });
    expect(value).toBe(initialValue + 1);
  });

  it("shouldn't return values outside given min and max range", async () => {
    const input = document.querySelector("input");
    fireEvent.change(input, { target: { value: props.max + 1 } });
    expect(value).toBe(props.max);

    fireEvent.change(input, { target: { value: props.min - 1 } });
    expect(value).toBe(props.min);
  });

  it("should increase value by given step after click on plus button", async () => {
    await user.click(screen.getByTestId("plus"));
    expect(value).toBe(initialValue + props.step);
  });

  it("should decrease value by given step after click on minus button", async () => {
    await user.click(screen.getByTestId("minus"));
    expect(value).toBe(initialValue - props.step);
  });
});
