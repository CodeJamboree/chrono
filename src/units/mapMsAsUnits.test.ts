import { expect } from "@codejamboree/js-test";
import { mapMsAsUnits } from "./mapMsAsUnits.js";
import { unitMsMap } from "./unitMsMap.js";
import { units } from "./units.js";

export const oneMs = () => {
  expect(mapMsAsUnits(1)).equals({
    ms: 1
  });
}
export const twoSecondsOneMs = () => {
  expect(mapMsAsUnits(2001)).equals({
    s: 2,
    ms: 1
  });
}
export const threeMinutesOneMs = () => {
  let ms = 1;
  ms += unitMsMap[units.minute] * 3;
  expect(mapMsAsUnits(ms)).equals({
    mi: 3,
    ms: 1
  });
}
export const fourHoursOneMs = () => {
  let ms = 1;
  ms += unitMsMap[units.hour] * 4;
  expect(mapMsAsUnits(ms)).equals({
    h: 4,
    ms: 1
  });
}

export const fiveDaysThreeMinutesOneMs = () => {
  let ms = 1;
  ms += unitMsMap[units.day] * 5;
  ms += unitMsMap[units.minute] * 3;
  expect(mapMsAsUnits(ms)).equals({
    d: 5,
    mi: 3,
    ms: 1
  });
}

export const monthsYearsMillenia = () => {
  let ms = 0;
  ms += unitMsMap[units.month] * 6;
  ms += unitMsMap[units.year] * 3;
  ms += unitMsMap[units.millenia] * 2;
  expect(mapMsAsUnits(ms)).equals({
    y: 2003,
    mo: 6
  });
}

export const fractionalSeconds = () => {
  let ms = 0;
  ms += unitMsMap[units.microsecond] * 123;
  ms += unitMsMap[units.nanosecond] * 456;
  ms += unitMsMap[units.picosecond] * 789;
  ms += unitMsMap[units.femtosecond] * 12;
  ms += unitMsMap[units.attosecond] * 345;
  ms += unitMsMap[units.zeptosecond] * 678;
  expect(mapMsAsUnits(ms)).equals({
    [units.microsecond]: 123,
    "ns": 456,
    "ps": 789,
    "fs": 12,
    "as": 345,
    // floating numbers not accurate
    "zs": 679.1752579689578
  });
}


export const everyUnit = () => {
  let ms = 0;
  ms += unitMsMap[units.year] * 1;
  ms += unitMsMap[units.month] * 2;
  ms += unitMsMap[units.day] * 3;
  ms += unitMsMap[units.hour] * 4;
  ms += unitMsMap[units.minute] * 5;
  ms += unitMsMap[units.second] * 6;
  ms += unitMsMap[units.millisecond] * 7;
  ms += unitMsMap[units.microsecond] * 8;
  ms += unitMsMap[units.nanosecond] * 9;
  ms += unitMsMap[units.picosecond] * 10;
  ms += unitMsMap[units.femtosecond] * 11;
  ms += unitMsMap[units.attosecond] * 12;
  ms += unitMsMap[units.zeptosecond] * 13;
  expect(mapMsAsUnits(ms)).equals({
    "y": 1,
    "mo": 2,
    "d": 3,
    "h": 4,
    "mi": 5,
    "s": 6,
    "ms": 7,
    "µs": 8,
    // Limited precision with floating point operations
    "ns": 10,
    "ps": 864,
    "fs": 257,
    "as": 812,
    "zs": 499.83433510100895
  });
}
