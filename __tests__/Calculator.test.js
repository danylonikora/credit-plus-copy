import React, { useTransition } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calculator from "../components/home/Calculator/Calculator";
import parseFormattedCurrency from "../utils/parseFormattedCurrency";
import calculateInterest from "../utils/calculateInterest";
import formatDate from "../utils/formatDate";

jest.mock("../utils/useTranslation");

let sumInput;
let daysInput;
const user = userEvent.setup();

const credit = {
  getValue(index) {
    const elements = screen.getAllByTestId("calculator-value");
    return parseFormattedCurrency(elements[index].textContent);
  },
  get body() {
    return this.getValue(0);
  },
  get interest() {
    return this.getValue(1);
  },
  get sum() {
    return this.getValue(2);
  },
};

const props = {
  initialSum: 5000,
  initialDays: 15,
};

beforeEach(() => {
  render(<Calculator {...props} />);
  sumInput = document.getElementsByName("sum")[0];
  daysInput = document.getElementsByName("days")[0];
});

describe("<Calculator />", () => {
  it("should properly display and calculate default given values", () => {
    const interest = calculateInterest(props.initialSum, props.initialDays);
    expect(credit.body).toBe(props.initialSum);
    expect(credit.interest).toBe(interest);
    expect(credit.sum).toBe(interest + props.initialSum);
  });

  it("should properly calculate credit values after changing days and sum values", () => {
    const sum = 500;
    const days = 15;
    let interest;

    fireEvent.change(sumInput, { target: { value: sum } });
    interest = calculateInterest(sum, props.initialDays);
    expect(credit.body).toBe(sum);
    expect(credit.interest).toBe(interest);
    expect(credit.sum).toBe(interest + sum);

    fireEvent.change(daysInput, { target: { value: days } });
    interest = calculateInterest(sum, days);
    expect(credit.body).toBe(sum);
    expect(credit.interest).toBe(interest);
    expect(credit.sum).toBe(interest + sum);
  });

  it("should properly display deadline date", () => {
    let formattedDate;
    let regex;

    formattedDate = formatDate(
      Date.now() + props.initialDays * 24 * 60 * 60 * 1000
    );
    regex = new RegExp(formattedDate, "iu");
    expect(screen.getByText(regex)).toBeInTheDocument();

    fireEvent.change(daysInput, { target: { value: props.initialDays - 1 } });
    formattedDate = formatDate(
      Date.now() + (props.initialDays - 1) * 24 * 60 * 60 * 1000
    );
    regex = new RegExp(formattedDate, "iu");
    expect(screen.getByText(regex)).toBeInTheDocument();
  });

  it("should properly calculate credit values after using valid promo code", async () => {
    await user.click(screen.getByText(/маю промокод/iu));
    const promoCodeInput = screen.getByPlaceholderText(/промокод/iu);
    fireEvent.change(promoCodeInput, { target: { value: "" } });
    await user.type(promoCodeInput, "GET DISCOUNT");
    await user.click(screen.getByText(/застосувати/iu));

    const interest = calculateInterest(
      props.initialSum,
      props.initialDays,
      true
    );
    expect(screen.getByText(/промокод застосовано/iu)).toBeInTheDocument();
    expect(credit.body).toBe(props.initialSum);
    expect(credit.interest).toBe(interest);
    expect(credit.sum).toBe(interest + props.initialSum);
  });

  it("shouldn't change credit values after inserting invalid promo code", async () => {
    await user.click(screen.getByText(/маю промокод/iu));
    const promoCodeInput = screen.getByPlaceholderText(/промокод/iu);
    fireEvent.change(promoCodeInput, { target: { value: "" } });
    await user.type(promoCodeInput, "INVALID");
    await user.click(screen.getByText(/застосувати/iu));

    const interest = calculateInterest(
      props.initialSum,
      props.initialDays,
      false
    );
    expect(
      screen.getByText(/зазначений промокод не знайдений або не дійсний/iu)
    ).toBeInTheDocument();
    expect(credit.body).toBe(props.initialSum);
    expect(credit.interest).toBe(interest);
    expect(credit.sum).toBe(interest + props.initialSum);
  });
});
