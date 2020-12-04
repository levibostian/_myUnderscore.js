import _isNullOrUndefined from "."

describe("_isNullOrUndefined", () => {
  it(`given a null value, expect true`, async () => {
    expect(_isNullOrUndefined(null)).toEqual(true)
  })
  it(`given an undefined value, expect true`, async () => {
    expect(_isNullOrUndefined(undefined)).toEqual(true)
  })
  it(`given false, expect false`, async () => {
    expect(_isNullOrUndefined(false)).toEqual(false)
  })
  it(`given NaN, expect false`, async () => {
    expect(_isNullOrUndefined(NaN)).toEqual(false)
  })
  it(`given 0, expect false`, async () => {
    expect(_isNullOrUndefined(0)).toEqual(false)
  })
})
