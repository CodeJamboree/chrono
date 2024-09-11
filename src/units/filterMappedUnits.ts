import { units } from "./units.js";
import { zeros } from '../global.js';

export const filterMappedUnits = (zeros: zeros, result: Partial<Record<units, number>>): Partial<Record<units, number>> => {

  let entries = Object.entries(result);

  switch (zeros) {
    case 'before':
      entries = notZeroBefore(entries);
      break;
    case 'after':
      entries = notZeroAfter(entries);
      break;
    case 'between':
      entries = notZeroAfter(entries);
      entries = notZeroBefore(entries);
      break;
    case 'none':
      entries = entries.filter(notZero);
      break;
    case 'all':
    default:
      break;
  }

  return Object.fromEntries(entries);
}

const notZeroBefore = <K extends string, V extends number>(entries: [K, V][]): [K, V][] => {
  const index = entries.findLastIndex(notZero);
  return entries.filter((_v, i) => i <= index);
}
const notZeroAfter = <K extends string, V extends number>(entries: [K, V][]): [K, V][] => {
  const index = entries.findIndex(notZero);
  return entries.filter((_v, i) => i >= index);
}
const notZero = ([, value]: [string, number]): boolean => value !== 0;
