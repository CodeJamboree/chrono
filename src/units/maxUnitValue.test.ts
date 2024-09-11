import { maxUnitValue } from "./maxUnitValue.js";
import { TestFunction, expect } from "@codejamboree/js-test";
import { units } from "./units.js";

export const defaultUnitOrder: TestFunction = (unit: units, value: number) => {
  expect(maxUnitValue(unit), unit).is(value);
}
defaultUnitOrder.testCases = [
  [units.zeptosecond, 999],
  [units.attosecond, 998], // floating point operation
  [units.femtosecond, 999],
  [units.picosecond, 998], // floating point operation
  [units.nanosecond, 999],
  [units.microsecond, 999],
  [units.millisecond, 999],
  [units.second, 59],
  [units.minute, 59],
  [units.hour, 23],
  [units.day, 29],
  [units.week, Infinity],
  [units.month, 11],
  [units.quarter, Infinity],
  [units.year, Infinity],
  [units.decade, Infinity],
  [units.score, Infinity],
  [units.century, Infinity],
  [units.millenia, Infinity],
]

export const customUnits: TestFunction = (unit: units, value: number) => {
  const unitOrders = [
    units.month,
    units.hour,
    units.millisecond
  ];
  expect(maxUnitValue(unit, unitOrders), unit).is(value);
}
customUnits.testCases = [
  [units.zeptosecond, Infinity],
  [units.attosecond, Infinity],
  [units.femtosecond, Infinity],
  [units.picosecond, Infinity],
  [units.nanosecond, Infinity],
  [units.microsecond, Infinity],
  [units.millisecond, 3599999],
  [units.second, Infinity],
  [units.minute, Infinity],
  [units.hour, 729],
  [units.day, Infinity],
  [units.week, Infinity],
  [units.month, Infinity],
  [units.quarter, Infinity],
  [units.year, Infinity],
  [units.decade, Infinity],
  [units.score, Infinity],
  [units.century, Infinity],
  [units.millenia, Infinity],
]