import { nameTypes } from "./nameTypes.js";
import { units } from "../units/units.js";
import { full } from "./full.js";
import { fullPlural } from "./fullPlural.js";
import { tinySuffix } from "./tinySuffix.js";

export const unitNames: Record<nameTypes, Record<units, string>> = {
  [nameTypes.tinySuffix]: tinySuffix,
  [nameTypes.full]: full,
  [nameTypes.fullPlural]: fullPlural
}