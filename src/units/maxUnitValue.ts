import { units } from "./units.js";
import { unitMsMap } from "./unitMsMap.js";
import { defaultUnitOrder } from "./defaultUnitOrder.js";

export const maxUnitValue = (unit: units, unitOrder: units[] = defaultUnitOrder): number => {
  const index = unitOrder.indexOf(unit);
  if (index < 1) return Infinity;
  let nextKey = unitOrder[index - 1] as units;

  const ms = unitMsMap[unit];
  const nextMs = unitMsMap[nextKey];

  return Math.floor((nextMs / ms) - 1);
}