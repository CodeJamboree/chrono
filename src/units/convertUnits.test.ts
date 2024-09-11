import { expect } from "@codejamboree/js-test/production";
import { convertUnits } from "./convertUnits.js";
import { units } from "./units.js";

export const secondsInMinute = () => {
  expect(convertUnits(60, units.second, units.minute)).is(1);
}
export const minutesInSecond = () => {
  expect(convertUnits(1, units.minute, units.second)).is(60);
}