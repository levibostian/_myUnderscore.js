import _isObject from "."

describe("_isObject", () => {
  it(`given undefined, expect false`, async () => {
    expect(_isObject(undefined)).toEqual(false)
  })
  it(`given null, expect false`, async () => {
    expect(_isObject(null)).toEqual(false)
  })
  it(`given an empty object, expect true`, async () => {
    expect(_isObject({})).toEqual(true)
  })
  it(`given an array of objects, expect false`, async () => {
    expect(_isObject([{ foo: "foo" }, { bar: "bar" }])).toEqual(false)
  })
  it(`given a non-empty object, expect true`, async () => {
    expect(_isObject({ foo: "bar" })).toEqual(true)
  })
  it(`given a nested object, expect true`, async () => {
    const given = {
      nested: {
        foo: "bar"
      }
    }
    expect(_isObject(given.nested)).toEqual(true)
  })
  it(`given a string, expect false`, async () => {
    expect(_isObject("foo")).toEqual(false)
  })
  it(`given a number, expect false`, async () => {
    expect(_isObject(0)).toEqual(false)
  })
  it(`given an enum member, expect false`, async () => {
    enum Foo {
      BAR
    }
    expect(_isObject(Foo.BAR)).toEqual(false)
  })
  it(`given true, expect false`, async () => {
    expect(_isObject(true)).toEqual(false)
  })
  it(`given false, expect false`, async () => {
    expect(_isObject(false)).toEqual(false)
  })
  it(`given a constructed class, expect true`, async () => {
    class Foo {
      public bar = "bar"
    }
    expect(_isObject(new Foo())).toEqual(true)
  })
})
