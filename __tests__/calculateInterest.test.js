import { RATE } from "../constants/rate";
import calculateInterest from "../utils/calculateInterest";

test("calculateInterest function", () => {
  for (let i = 0; i < 100; i++) {
    const days = Math.round(Math.random() * 15);
    const sum = Math.round(Math.random() * 1e6);
    const isDiscount = Boolean(Math.round(Math.random() * 2 - 0.5));
    expect(calculateInterest(sum, days, isDiscount)).toBe(
      ((days * (isDiscount ? RATE.DISCOUNT : RATE.DEFAULT)) / 100 + 1) * sum - sum
    );
  }
});
