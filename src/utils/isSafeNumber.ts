
export const isSafeNumber = (value: any): value is number => typeof value === 'number' &&
  !isNaN(value) &&
  value <= Number.MAX_SAFE_INTEGER &&
  value >= Number.MIN_SAFE_INTEGER;
