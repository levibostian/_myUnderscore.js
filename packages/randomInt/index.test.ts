import _randomInt from "."

describe("_randomInt", () => {
  it(`given min 1 and max 1, expect get 1`, async () => {
    // test the function is inclusive.
    expect(_randomInt(1, 1)).toEqual(1)
  })
  it(`given min and max, expect value is in range`, async () => {
    const actual = _randomInt(1, 5)

    expect(actual).toBeGreaterThanOrEqual(1)
    expect(actual).toBeLessThanOrEqual(5)
  })
  it(`given defaults, expect a random value`, async () => {
    const actual = _randomInt()

    expect(actual).toBeGreaterThanOrEqual(1)
  })
  it(`given negative values, expect a value`, async () => {
    const actual = _randomInt(-10, 10)

    expect(actual).toBeGreaterThanOrEqual(-10)
    expect(actual).toBeLessThanOrEqual(10)
  })
})
