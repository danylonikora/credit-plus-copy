import { RATE } from "../constants/rate";

function calculateInterest(sum, days, isDiscount = false) {
  return (
    ((days * (isDiscount ? RATE.DISCOUNT : RATE.DEFAULT)) / 100 + 1) * sum - sum
  );
}

export default calculateInterest;
