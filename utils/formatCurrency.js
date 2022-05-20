import { NON_BREAKING_SPACE as NBS } from "../constants/nonBreakingSpace";

function formatCurrency(num) {
  return (
    Intl.NumberFormat("uk-UA", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num) + NBS + "грн"
  );
}

export default formatCurrency;