import lodash_isNil from "lodash.isnil"

const _isNullOrUndefined = (value: unknown): value is null | undefined => {
  return lodash_isNil(value)
}

export default _isNullOrUndefined
