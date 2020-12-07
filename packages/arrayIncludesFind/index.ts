const _arrayIncludesFind = <T>(array: T[], doesContain: (element: T) => boolean): boolean => {
  let result = false

  array.forEach(element => {
    if (doesContain(element)) {
      result = true
    }
  })

  return result
}

export default _arrayIncludesFind
