import _isObject from "@levibostian/my_isobject"
import _isNullOrUndefined from "@levibostian/my_isnullorundefined"

const _mapAll = (
  _obj: { [key: string]: unknown },
  check: (value: unknown, key: string) => unknown | undefined
): { [key: string]: unknown } => {
  const obj = Object.assign({}, _obj)

  const helper = (obj: { [key: string]: unknown }): void => {
    Object.keys(obj).forEach(function(key) {
      const value = obj[key]

      // Nested object
      if (_isObject(value)) {
        helper(value as { [key: string]: unknown })
      } else if (Array.isArray(value)) {
        // array of Objects
        value.forEach(item => {
          if (_isObject(item)) {
            helper(item)
          } else {
            // The value is an Array, but not an array of objects. More then likely an Array of strings or something.
            // To keep this util function not complex, we are going to just ignore these and leave them be in the Object.
          }
        })
      } else {
        const editedValue = check(value, key)
        if (!_isNullOrUndefined(editedValue)) {
          obj[key] = editedValue
        }
      }
    })
  }

  helper(obj)

  return obj
}

export default _mapAll
