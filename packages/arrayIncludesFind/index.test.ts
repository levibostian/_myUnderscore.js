import _arrayIncludesFind from "."

describe("_arrayIncludesFind", () => {
  it(`given an empty array, expect get false`, async () => {
    const given: string[] = []

    expect(_arrayIncludesFind(given, () => false)).toEqual(false)
  })
  it(`given an empty array, expect do not call lambda function`, async () => {
    const given: string[] = []
    let calledLambda = false

    _arrayIncludesFind(given, () => {
      calledLambda = true
      return false
    })

    expect(calledLambda).toEqual(false)
  })
  it(`given an array with an item, expect do call lambda function`, async () => {
    const given: string[] = ["foo"]
    let calledLambda = false

    _arrayIncludesFind(given, () => {
      calledLambda = true
      return false
    })

    expect(calledLambda).toEqual(true)
  })
  it(`given array of objects with nested objects, expect result`, async () => {
    interface Foo {
      nested: {
        bar: number
      }
    }
    const given: Foo[] = [
      {
        nested: {
          bar: 1
        }
      }
    ]

    expect(_arrayIncludesFind(given, item => item.nested.bar == 1)).toEqual(true)
    expect(_arrayIncludesFind(given, item => item.nested.bar !== 1)).toEqual(false)
  })
})
