const _arrayLast = <T>(array: Array<unknown>): T | undefined => {
  if (!Array.isArray(array)) throw new Error("You passed in a value that's not an array.")

  if (array.length <= 0) return undefined

  return array[array.length - 1]
}

export default _arrayLast
