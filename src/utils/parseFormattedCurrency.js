import { NON_BREAKING_SPACE as NBS } from "../constants/nonBreakingSpace";

function parseFormattedCurrency(string) {
  const chars = string.split("");
  return Number(
    chars
      .slice(0, chars.length - 4)
      .filter((char) => char !== NBS)
      .map((char) => (char === "," ? "." : char))
      .join("")
  );
}

export default parseFormattedCurrency;
