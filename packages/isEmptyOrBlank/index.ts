const _isEmptyOrBlank = (value: Array<unknown> | string): boolean => {
  if (typeof value === "string") return (value as string).replace(" ", "").length <= 0 // handle strings being blank

  return value.length <= 0
}

export default _isEmptyOrBlank
