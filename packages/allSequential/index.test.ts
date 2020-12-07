import _allSequential from "."

describe("_allSequential", () => {
  it(`given an array of Promises, expect get all values in order`, async () => {
    const given: Promise<string>[] = [
      Promise.resolve("first"),
      Promise.resolve("second"),
      Promise.resolve("third")
    ]

    expect(await _allSequential(given)).toEqual(["first", "second", "third"])
  })
  it(`given a rejection Promise, expect to throw`, async () => {
    const given: Promise<string>[] = [
      Promise.resolve("first"),
      Promise.reject(new Error("rejection!"))
    ]

    await expect(_allSequential(given)).rejects.toThrow()
  })
})
