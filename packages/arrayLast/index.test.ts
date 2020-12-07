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
})
