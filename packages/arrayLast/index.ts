import _isEmptyOrBlank from "@levibostian/my_isemptyorblank"

const _arrayLast = <T>(value: Array<T>): T | undefined => {
  if (_isEmptyOrBlank(value)) return undefined

  return value[value.length - 1]
}

export default _arrayLast
