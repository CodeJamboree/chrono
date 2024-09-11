import { maxUnitValue } from "../units/maxUnitValue.js";
import { units } from "../units/units.js";

export const padUnitValue = (value: number, unit: units, unitOrder: units[]) => {
  const max = maxUnitValue(unit, unitOrder);
  const pad = max.toString().length;
  return value.toString().padStart(pad, '0');
}