import { expect } from "@codejamboree/js-test/production"
import { allUnitsDescending } from "./allUnitsDescending.js"
import { units } from "./units.js"
import { unitMsMap } from "./unitMsMap.js"

export const allUnitsPresent = () => {
  Object.values(units).forEach(key => {
    expect(allUnitsDescending, key).includes(key);
  })
}
export const noUnexpectedUnits = () => {
  const keys = Object.values(units)
  allUnitsDescending.forEach(key => {
    expect(keys, key).includes(key);
  })
}
export const descendingOrder = () => {
  let lastValue = Infinity;
  let lastKey = '(none)';
  allUnitsDescending.forEach(key => {
    let value = unitMsMap[key];
    expect(value, `${key}:${lastKey}`).below(lastValue);
    lastValue = value;
    lastKey = key;
  })
}