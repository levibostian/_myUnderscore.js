import { _arrayIsEmpty } from "."

describe("_arrayIsEmpty", () => {
  it(`given an empty array, expect true`, async () => {
    const given: string[] = []

    expect(_arrayIsEmpty(given)).toEqual(true)
  })
  it(`given array not empty, expect false`, async () => {
    const given: string[] = [""]

    expect(_arrayIsEmpty(given)).toEqual(false)
  })
  it(`given an object, expect throw`, async () => {
    const given: string[] = {} as string[]

    expect(() => {
      _arrayIsEmpty(given)
    }).toThrow()
  })
  it(`given a string, expect throw`, async () => {
    const given: string[] = ("foo" as unknown) as string[]

    expect(() => {
      _arrayIsEmpty(given)
    }).toThrow()
  })
  it(`given undefined and null, expect throw`, async () => {
    const given: string[] = (undefined as unknown) as string[]

    expect(() => {
      _arrayIsEmpty(given)
    }).toThrow()
  })
  it(`given null, expect throw`, async () => {
    const given: string[] = (null as unknown) as string[]

    expect(() => {
      _arrayIsEmpty(given)
    }).toThrow()
  })
})
