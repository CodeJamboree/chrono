import { unitMsMap } from "./units/unitMsMap.js";
import { units } from "./units/units.js";

export const timeSince = (date: Date, unit: units = units.millisecond, endDate: Date = new Date()): number | bigint => {
  const ms = endDate.getTime() - date.getTime();
  const msPerUnit = unitMsMap[unit];
  if (!msPerUnit)
    throw new Error(`Unexpected unit '${unit}'`);
  const value = ms / msPerUnit;
  if (value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER)
    return BigInt(ms / msPerUnit);
  return value;
}
