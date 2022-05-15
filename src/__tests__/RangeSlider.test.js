import React, { useState, useEffect } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RangeSlider from "../components/RangeSlider/RangeSlider";

const props = {
  max: 10,
  min: 1,
  step: 1,
  name: "input",
  unit: "грн",
};

describe("<RangeSlider />", () => {
  it("renders input inside it with correct given values", () => {
    function Parent() {
      const [value, setValue] = useState(5);

      useEffect(() => {
        const input = document.querySelector("input");
        expect(input).toBeVisible();
        expect(+input.value).toBe(value);
        expect(input.name).toBe(props.name);
        expect(+input.step).toBe(props.step);
        expect(+input.min).toBe(props.min);
        expect(+input.max).toBe(props.max);
        expect(input.type).toBe("range");
        expect(input).toHaveClass("range-slider__range");
      }, []);

      return <RangeSlider value={value} handleChange={setValue} {...props} />;
    }

    render(<Parent />);
  });

  it("properly changes given value with given handleChange", () => {
    function Parent() {
      const [value, setValue] = useState(5);

      useEffect(() => {
        const input = document.querySelector("input");
        fireEvent.change(input, { target: { value: 7 } });
        if (value !== 5) {
          expect(value).toBe(7);
        }
      }, [value]);

      return <RangeSlider value={value} handleChange={setValue} {...props} />;
    }

    render(<Parent />);
  });

  describe("doesn't return values that are", () => {
    it("bigger then given max", () => {
      function Parent() {
        const [value, setValue] = useState(5);

        useEffect(() => {
          const input = document.querySelector("input");
          fireEvent.change(input, { target: { value: 11 } });
          if (value !== 5) {
            expect(value).toBe(10);
          }
        }, [value]);

        return <RangeSlider value={value} handleChange={setValue} {...props} />;
      }

      render(<Parent />);
    });

    it("lower then given min", () => {
      function Parent() {
        const [value, setValue] = useState(5);

        useEffect(() => {
          const input = document.querySelector("input");
          fireEvent.change(input, { target: { value: 0 } });
          if (value !== 5) {
            expect(value).toBe(1);
          }
        }, [value]);

        return <RangeSlider value={value} handleChange={setValue} {...props} />;
      }

      render(<Parent />);
    });
  });

  describe("click on", () => {
    it("plus changes value by given step", () => {
      function Parent() {
        const [value, setValue] = useState(5);

        useEffect(() => {
          const plus = screen.getByTestId("plus");
          if (value === 5) {
            fireEvent.click(plus);
          }
          if (value !== 5) {
            expect(value).toBe(6);
          }
        }, [value]);

        return <RangeSlider value={value} handleChange={setValue} {...props} />;
      }

      render(<Parent />);
    });

    it("minus changes value by given step", () => {
      function Parent() {
        const [value, setValue] = useState(5);

        useEffect(() => {
          const minus = screen.getByTestId("minus");
          if (value === 5) {
            fireEvent.click(minus);
          }
          if (value !== 5) {
            expect(value).toBe(4);
          }
        }, [value]);

        return <RangeSlider value={value} handleChange={setValue} {...props} />;
      }

      render(<Parent />);
    });
  });
});