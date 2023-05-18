export function isSortDefined<T>(
  val: T | undefined | null
): val is Exclude<T, undefined | null | any[]> {
  return val !== undefined && val !== null && !Array.isArray(val);
}
