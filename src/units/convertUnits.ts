import { unitMsMap } from "./unitMsMap.js";
import { units } from "./units.js";

export const convertUnits = (value: number, unit: units, targetUnit: units) => {
  if (unit === targetUnit) return value;
  const ms = unitMsMap[unit];
  const targetMs = unitMsMap[targetUnit];
  const ratio = ms / targetMs
  return value * ratio;
}