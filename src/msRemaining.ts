export const msRemaining = (
  started: Date,
  unitsProcessed: number,
  unitsRemaining: number,
  now: Date = new Date()
): number | undefined => {
  if (unitsRemaining === 0) return 0;

  let msStart = started.getTime();
  let msNow = now.getTime();
  const msPassed = msNow - msStart;

  if (msStart === msNow) return -Infinity;
  if (unitsProcessed === 0) {
    if (unitsRemaining < 0) {
      return msNow >= msStart ? -Infinity : Infinity;
    }
    return msNow >= msStart ? Infinity : -Infinity;
  }

  const msPerUnit = msPassed / unitsProcessed;
  return msPerUnit * unitsRemaining;
}