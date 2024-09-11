import { msRemaining } from "./msRemaining.js";
import { expect, dateUtils } from "@codejamboree/js-test";

const msPerUnit = 1000;
const past = new Date(0);
const same = past;
const future = new Date(msPerUnit);
const processNegative = -1;
const none = 0;
const processedOne = 1;
const coupleMore = 2;
const negativeRemain = -2;

export const basicCalc = () => {
  expect(msRemaining(past, 1, 2, future)).is(msPerUnit * 2)
}
export const pastDates = () => {
  expect(msRemaining(future, 1, 2, past)).is(msPerUnit * -2)
}
export const calcNow = () => {
  dateUtils.set(future)
  expect(msRemaining(past, 1, 2)).is(msPerUnit * 2);
}
calcNow.after = () => {
  dateUtils.restore();
}

export const remaining = (
  start: Date,
  end: Date,
  processedUnits: number,
  remainingUnits: number,
  msExpected: number
) => {
  expect(msRemaining(start, processedUnits, remainingUnits, end)).is(msExpected)
}
remaining.testCases = [
  [same, same, processedOne, coupleMore, -Infinity], // 0
  [same, same, processedOne, none, 0],
  [same, same, processedOne, negativeRemain, -Infinity],
  [same, same, none, coupleMore, -Infinity],
  [same, same, none, none, 0],
  [same, same, none, negativeRemain, -Infinity],
  [same, same, processNegative, coupleMore, -Infinity],
  [same, same, processNegative, none, 0],
  [same, same, processNegative, negativeRemain, -Infinity],

  [past, future, processedOne, coupleMore, 2000],// 9
  [past, future, processedOne, none, 0],
  [past, future, processedOne, negativeRemain, -2000],
  [past, future, none, coupleMore, Infinity],
  [past, future, none, none, 0],
  [past, future, none, negativeRemain, -Infinity],
  [past, future, processNegative, coupleMore, -2000],
  [past, future, processNegative, none, 0],
  [past, future, processNegative, negativeRemain, 2000],

  [future, past, processedOne, coupleMore, -2000],//18
  [future, past, processedOne, none, 0],
  [future, past, processedOne, negativeRemain, 2000],
  [future, past, none, coupleMore, -Infinity],
  [future, past, none, none, 0],
  [future, past, none, negativeRemain, Infinity],
  [future, past, processNegative, coupleMore, 2000],
  [future, past, processNegative, none, 0],
  [future, past, processNegative, negativeRemain, -2000]
];
