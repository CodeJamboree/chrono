import { nameTypes } from "./nameTypes.js";
import { unitNames } from "./unitNames.js";
import { units } from "../units/units.js";

export const unitName = (unit: units, type: nameTypes = nameTypes.full) => unitNames[type][unit];