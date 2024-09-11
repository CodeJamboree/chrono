import { unitMsMap } from "./unitMsMap.js";
import { expect } from '@codejamboree/js-test';
import { units } from './units.js';

const regularYearDays = 365;
const leapYearDays = regularYearDays + 1;
const yearsInCycle = 400;
const centuryYearsOtherThan400 = Math.floor(yearsInCycle / 100) - 1;
const regularYearsInCycle = (yearsInCycle - (yearsInCycle / 4)) + centuryYearsOtherThan400;
const leapYearsInCycle = (yearsInCycle / 4) - centuryYearsOtherThan400;
const daysInCycle = (regularYearsInCycle * regularYearDays) + (leapYearsInCycle * leapYearDays);
const averageDaysInYear = daysInCycle / yearsInCycle;
const averageDaysInMonth = (averageDaysInYear / 12);

const msPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const yearsPerDecade = 10;
const decadesPerCentury = 10;
const centuriesPerMillenia = 10;

export const zeptosecond = () => {
  expect(unitMsMap.zs).is(Math.pow(10, -18));
}
export const attosecond = () => {
  expect(unitMsMap.as).is(Math.pow(10, -15));
}
export const femtosecond = () => {
  expect(unitMsMap.fs).is(Math.pow(10, -12));
}
export const picosecond = () => {
  expect(unitMsMap.ps).is(Math.pow(10, -9));
}
export const nanosecond = () => {
  expect(unitMsMap.ns).is(Math.pow(10, -6));
}
export const microsecond = () => {
  expect(unitMsMap[units.microsecond]).is(Math.pow(10, -3));
}
export const millisecond = () => {
  expect(unitMsMap.ms).is(1);
}
export const second = () => {
  expect(unitMsMap.s).is(msPerSecond);
}
export const minute = () => {
  expect(unitMsMap.mi).is(msPerSecond * secondsPerMinute);
}
export const hour = () => {
  expect(unitMsMap.h).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour
  );
}
export const day = () => {
  expect(unitMsMap.d).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay
  );
}
export const week = () => {
  expect(unitMsMap.w).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    daysPerWeek
  );
}
export const mo = () => {
  expect(unitMsMap.mo).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    averageDaysInMonth
  );
}
export const year = () => {
  expect(unitMsMap.y).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    averageDaysInYear
  );
}
export const decade = () => {
  expect(unitMsMap.dec).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    averageDaysInYear *
    yearsPerDecade
  );
}
export const century = () => {
  expect(unitMsMap.cen).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    averageDaysInYear *
    yearsPerDecade *
    decadesPerCentury
  );
}
export const millenia = () => {
  expect(unitMsMap.mil).is(
    msPerSecond *
    secondsPerMinute *
    minutesPerHour *
    hoursPerDay *
    averageDaysInYear *
    yearsPerDecade *
    decadesPerCentury *
    centuriesPerMillenia
  );
}