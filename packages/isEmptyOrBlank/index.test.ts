import _isEmptyOrBlank from "."

describe("_isEmptyOrBlank", () => {
  it(`given an empty array, expect true`, async () => {
    const given: string[] = []

    expect(_isEmptyOrBlank(given)).toEqual(true)
  })
  it(`given array not empty, expect false`, async () => {
    const given: string[] = [""]

    expect(_isEmptyOrBlank(given)).toEqual(false)
  })
  it(`given an empty string, expect true`, async () => {
    const given = ""

    expect(_isEmptyOrBlank(given)).toEqual(true)
  })
  it(`given a string with whitespace, expect true`, async () => {
    const given = " "

    expect(_isEmptyOrBlank(given)).toEqual(true)
  })
  it(`given a string, expect do not manipulate string`, async () => {
    const given = "foo"

    _isEmptyOrBlank(given)

    expect(given).toEqual("foo")
  })
  it(`given a string with some whitespace but some characters not, expect false`, async () => {
    const given = "foo bar"

    expect(_isEmptyOrBlank(given)).toEqual(false)
  })
})
