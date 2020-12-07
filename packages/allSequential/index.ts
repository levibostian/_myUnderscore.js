const _allSequential = async <T>(promises: Promise<T>[]): Promise<T[]> => {
  const values: T[] = []

  for await (const value of promises) {
    values.push(value)
  }

  return values
}

export default _allSequential
