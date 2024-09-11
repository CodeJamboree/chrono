import { expect } from "@codejamboree/js-test";
import { filterMappedUnits } from "./filterMappedUnits.js";
import { units } from "./units.js";

const result = {
  "y": 0,
  "mo": 0,
  "d": 0,
  "h": 4,
  "mi": 0,
  "s": 0,
  "ms": 1,
  [units.microsecond]: 0,
  "ns": 0,
  "ps": 0,
  "fs": 0,
  "as": 0,
  "zs": 0
};

export const zerosBefore = () => {
  expect(filterMappedUnits('before', result)).equals({
    "y": 0,
    "mo": 0,
    "d": 0,
    "h": 4,
    "mi": 0,
    "s": 0,
    "ms": 1
  });
}
export const zerosAfter = () => {
  expect(filterMappedUnits('after', result)).equals({
    "h": 4,
    "mi": 0,
    "s": 0,
    "ms": 1,
    "µs": 0,
    "ns": 0,
    "ps": 0,
    "fs": 0,
    "as": 0,
    "zs": 0
  });
}
export const zerosBetween = () => {
  expect(filterMappedUnits('between', result)).equals({
    "h": 4,
    "mi": 0,
    "s": 0,
    "ms": 1
  });
}

export const zerosAll = () => {
  expect(filterMappedUnits('all', result)).equals({
    "y": 0,
    "mo": 0,
    "d": 0,
    "h": 4,
    "mi": 0,
    "s": 0,
    "ms": 1,
    "µs": 0,
    "ns": 0,
    "ps": 0,
    "fs": 0,
    "as": 0,
    "zs": 0
  });
}

export const zerosNone = () => {
  expect(filterMappedUnits('none', result)).equals({
    "h": 4,
    "ms": 1
  });
}