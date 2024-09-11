import { units } from "../units/units.js";

export const tinySuffix: Record<units, string> = {
  [units.zeptosecond]: 'zs',
  [units.attosecond]: 'as',
  [units.femtosecond]: 'fs',
  [units.picosecond]: 'ps',
  [units.nanosecond]: 'ns',
  [units.microsecond]: '\u00B5s',
  [units.millisecond]: 'ms',
  [units.second]: 's',
  [units.minute]: 'm',
  [units.hour]: 'h',
  [units.day]: 'd',
  [units.week]: 'w',
  [units.month]: 'm',
  [units.quarter]: 'q',
  [units.year]: 'y',
  [units.decade]: 'dec',
  [units.score]: 'sco',
  [units.century]: 'c',
  [units.millenia]: 'm'
};