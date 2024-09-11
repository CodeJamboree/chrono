
import { isNumber } from "../utils/isNumber.js";
import { isString } from "../utils/isString.js";
import { units } from '../units/units.js';
import { mapMsAsUnits } from "../units/mapMsAsUnits.js";
import { defaultUnitOrder } from "../units/defaultUnitOrder.js";
import { unitName } from "../unitNames/unitName.js";
import { padUnitValue } from "./padUnitValue.js";
import { nameTypes } from "../unitNames/nameTypes.js";

export const formatMsAsDuration = (ms: any) => {
  if (ms === undefined || ms === null) return;
  if (isString(ms)) {
    ms = parseFloat(ms);
  }
  if (!isNumber(ms)) return;
  if (isNaN(ms)) return;
  switch (ms) {
    case 0: return 'instant';
    case Infinity: return 'forever';
    case -Infinity: return 'never';
    default: break;
  }

  if (ms > Number.MAX_SAFE_INTEGER) return 'distant future';
  if (ms <= Number.MIN_SAFE_INTEGER) return 'distant past';

  let sign = '';
  if (ms < 0) {
    sign = '-';
    ms *= -1;
  }
  const msIndex = defaultUnitOrder.indexOf(units.millisecond);
  const noSeconds = defaultUnitOrder.filter(v => v !== units.second);
  let entries = Object.entries(mapMsAsUnits(ms, {
    zeros: 'after',
    unitOrder: noSeconds

  }) ?? {});
  if (entries.length === 0 || (entries.length === 1 && Math.floor(entries[0][1]) === 0)) {
    return `0${unitName(units.second, nameTypes.tinySuffix)}`;
  }
  const lastValueIndex = entries.findLastIndex(v => v[1] !== 0);
  entries = entries.filter(([unit], i) => i <= lastValueIndex || defaultUnitOrder.indexOf(unit as units) <= msIndex);
  const msIndexValue = entries.findIndex(v => v[0] === units.millisecond);
  let secondsCount = 0;
  if (msIndexValue !== -1 && msIndexValue <= 1) {
    secondsCount = entries[msIndexValue][1] > 1000 ? 1 : 0;
  }

  let maxGroups = 3 - secondsCount;

  return sign + entries
    .filter((_, i) => i < maxGroups)
    .map(mapPart, {
      unitOrder: defaultUnitOrder,
      msIndex
    }).join(":");
}

function mapPart(this: { unitOrder: units[], msIndex: number }, [key, value]: [string, number], idx: number, all: any[]): string | undefined {
  let unit: units = key as units;
  let suffix: string;
  let num: number;

  if (unit === units.millisecond) {
    const notLast = idx !== all.length - 1;
    const includeMs = all.length !== 3;
    const params = parseMsAndSParams(unit, value, this.unitOrder, notLast, includeMs);
    unit = params.unit;
    suffix = params.suffix;
    num = params.num;
  } else {
    unit = key as units;
    suffix = unitName(unit as units, nameTypes.tinySuffix);;
    num = Math.floor(value);
  }

  if (idx === 0)
    return `${num.toLocaleString()}${suffix}`

  return `${padUnitValue(num, unit, this.unitOrder)}${suffix}`;
};
const parseMsAndSParams = (unit: units, value: number, unitOrder: units[], notLast: boolean, includeMs: boolean) => {
  const sms = mapMsAsUnits(value, { unitOrder: [units.second, units.millisecond] }) ?? {};
  const num = sms[units.second] ?? 0;
  const ms = sms[units.millisecond] ?? 0;

  let suffix = unitName(units.second, nameTypes.tinySuffix);

  unit = units.second;
  if (notLast || (ms !== 0 && includeMs)) {
    suffix = `.${padUnitValue(ms, units.millisecond, unitOrder)}${suffix}`;
  }
  return {
    num,
    suffix,
    unit
  }
}