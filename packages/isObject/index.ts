const _isObject = (value: unknown): boolean => {
  // Help from: https://stackoverflow.com/a/8511350/1486374
  // Also, unit tests showed that Arrays are considered objects so we check for that.
  return !Array.isArray(value) && typeof value === "object" && value !== null
}

export default _isObject
