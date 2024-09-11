import { units } from "./units.js";

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = 365.2425 * day;

export const unitMsMap: Record<units, number> = {
  [units.zeptosecond]: 1e-18,
  [units.attosecond]: 1e-15,
  [units.femtosecond]: 1e-12,
  [units.picosecond]: 1e-9,
  [units.nanosecond]: 1e-6,
  [units.microsecond]: 1e-3,
  [units.millisecond]: 1,
  [units.second]: second,
  [units.minute]: minute,
  [units.hour]: hour,
  [units.day]: day,
  [units.week]: day * 7,
  [units.month]: year / 12,
  [units.quarter]: year / 4,
  [units.year]: year,
  [units.decade]: year * 10,
  [units.score]: year * 20,
  [units.century]: year * 100,
  [units.millenia]: year * 1000
};