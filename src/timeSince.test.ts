import { expect, dateUtils, TestFunction } from "@codejamboree/js-test"
import { timeSince } from "./timeSince.js"
import { units } from "./units/units.js"

export const afterEach = () => {
  dateUtils.restore();
};

export const tenSecondsAgo = () => {
  dateUtils.set(new Date(10000));
  // @ts-expect-error
  expect(timeSince(new Date(0), 's')).is(10);
}

export const positiveValues: TestFunction = (msPassed: number, unit: units, expected: number) => {
  dateUtils.set(msPassed);
  expect(timeSince(new Date(0), unit), unit).is(expected);
}

positiveValues.testCases = [
  // date granularity only goes down to ms
  [93.1415926535898, 'zs', 93000000000000000000n],
  [93.1415926535898, 'as', 93000000000000000n],
  [93.1415926535898, 'fs', 93000000000000],
  [93.1415926535898, 'ps', 93000000000],
  [93.14159265358978, 'ns', 93000000],
  [93.1415926535898, 'µs', 93000],
  [93.1415926535898, 'ms', 93],
  // floats are not precise
  [93141.5926535898, 's', 93.141],
  [5588495.559215388, 'mi', 93.14158333333333],
  [335309733.55292326, 'h', 93.1415925],
  [8047433605.270159, 'd', 93.14159265046297],
  [56332035236.891106, 'w', 93.1415926521164],
  [244938730714.40717, 'mo', 93.14159265343497],
  [734816192143.2214, 'q', 93.14159265356173],
  [2939264768572.8857, 'y', 93.14159265356173],
  [29392647685728.86, 'dec', 93.14159265358708],
  [58785295371457.72, 'sc', 93.14159265358866],
  [293926476857288.56, 'cen', 93.14159265358961],
  [2939264768572886, 'mil', 93.1415926535898]
]

export const negativeValues: TestFunction = (msPassed: number, unit: units, expected: number) => {
  dateUtils.set(msPassed);
  expect(timeSince(new Date(0), unit), unit).is(expected);
}

negativeValues.testCases = [
  // Date object does not have precision past milliseconds
  [-86.85840734641019, 'zs', -86000000000000000000n],
  [-86.8584073464102, 'as', -86000000000000000n],
  [-86.85840734641019, 'fs', -86000000000000],
  [-86.8584073464102, 'ps', -86000000000],
  [-86.85840734641019, 'ns', -86000000],
  [-86.8584073464102, 'µs', -86000],
  [-86.8584073464102, 'ms', -86],
  // floats are not precise
  [-86858.4073464102, 's', -86.858],
  [-5211504.440784612, 'mi', -86.8584],
  [-312690266.44707674, 'h', -86.85840722222223],
  [-7504566394.729841, 'd', -86.85840733796296],
  [-52531964763.108894, 'w', -86.85840734623015],
  [-228415549285.59283, 'mo', -86.85840734618476],
  [-685246647856.7786, 'q', -86.85840734631152],
  [-2740986591427.1143, 'y', -86.85840734640658],
  [-27409865914271.14, 'dec', -86.85840734640975],
  [-54819731828542.28, 'sc', -86.85840734640975],
  [-274098659142711.4, 'cen', -86.85840734641008],
  [-2740986591427114, 'mil', -86.8584073464102]
]
