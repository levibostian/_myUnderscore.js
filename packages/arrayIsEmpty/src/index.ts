export const _arrayIsEmpty = (array: Array<unknown>): boolean => {
  if (!Array.isArray(array)) throw new Error("You passed in a value that's not an array.")

  return array.length <= 0
}
