import _arrayLast from "."

describe("_arrayLast", () => {
  it(`given an empty array, expect undefined`, async () => {
    const given: string[] = []

    expect(_arrayLast(given)).toBeUndefined()
  })
  it(`given array not empty, expect get last item`, async () => {
    const given: string[] = ["first", "last"]

    expect(_arrayLast(given)).toEqual("last")
  })
  it(`given an object, expect throw`, async () => {
    const given: string[] = ({
      prop: "foo"
    } as unknown) as string[]

    expect(() => {
      _arrayLast(given)
    }).toThrow()
  })
  it(`given a string, expect throw`, async () => {
    const given: string[] = ("foo" as unknown) as string[]

    expect(() => {
      _arrayLast(given)
    }).toThrow()
  })
  it(`given undefined and null, expect throw`, async () => {
    const given: string[] = (undefined as unknown) as string[]

    expect(() => {
      _arrayLast(given)
    }).toThrow()
  })
  it(`given null, expect throw`, async () => {
    const given: string[] = (null as unknown) as string[]

    expect(() => {
      _arrayLast(given)
    }).toThrow()
  })
})
