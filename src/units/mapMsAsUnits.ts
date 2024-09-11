
import { filterMappedUnits } from "./filterMappedUnits.js";
import { zeros } from "../global.js";
import { unitMsMap } from "./unitMsMap.js";
import { units } from './units.js';
import { isSafeNumber } from "../utils/isSafeNumber.js";
import { defaultUnitOrder } from "./defaultUnitOrder.js";

interface mapMsAsUnitsOptions {
  unitOrder?: units[],
  zeros?: zeros
}
export const mapMsAsUnits = (ms: any, options: mapMsAsUnitsOptions = {}): undefined | Partial<Record<units, number>> => {
  if (!isSafeNumber(ms)) return;

  let result: Partial<Record<units, number>> = {};

  const multiplier = ms < 0 ? -1 : 1;
  ms *= multiplier;

  const {
    unitOrder = defaultUnitOrder,
    zeros = 'none'
  } = options;

  unitOrder.forEach((unit: units, i: number) => {
    if (ms === 0) {
      result[unit] = 0;
      return;
    }
    let unitMs = unitMsMap[unit];
    const isLast = i === unitOrder.length - 1;
    let count = ms / unitMs;
    if (!isLast) {
      count = Math.floor(count);
      ms -= count * unitMs;
    }
    result[unit] = count * multiplier;
  });

  return filterMappedUnits(zeros, result);

}
