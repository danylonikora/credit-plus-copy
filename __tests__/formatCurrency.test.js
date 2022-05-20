import formatCurrency from "../utils/formatCurrency";
import { NON_BREAKING_SPACE as NBS } from "../constants/nonBreakingSpace";

test("formatCurrency function formats given number to readable string and adds short name of currency to that string", () => {
  expect(formatCurrency(0)).toBe(`0,00${NBS}грн`);
  expect(formatCurrency(-0)).toBe(`-0,00${NBS}грн`);
  expect(formatCurrency(0.33)).toBe(`0,33${NBS}грн`);
  expect(formatCurrency(1e3)).toBe(`1${NBS}000,00${NBS}грн`);
  expect(formatCurrency(1e6)).toBe(`1${NBS}000${NBS}000,00${NBS}грн`);
});