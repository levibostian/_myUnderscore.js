import _mapAll from "."

type KeyObject = { [key: string]: unknown }

describe("_mapAll", () => {
  it(`given empty object, expect get back empty object`, async () => {
    const given: KeyObject = {}

    expect(_mapAll(given, item => item)).toEqual({})
  })
  it(`given object, expect modify properties of object`, async () => {
    const given: KeyObject = {
      foo: 0
    }
    const expected = {
      foo: 1
    }

    expect(_mapAll(given, value => (value as number) + 1)).toEqual(expected)
  })
  it(`given return undefined, expect do not modify`, async () => {
    const given: KeyObject = {
      foo: 0
    }
    const expected = {
      foo: 0
    }

    expect(_mapAll(given, value => undefined)).toEqual(expected)
  })
  it(`given nested object, expect modify properties`, async () => {
    const given: KeyObject = {
      foo: 0,
      nested: {
        bar: 1
      }
    }
    const expected = {
      foo: 1,
      nested: {
        bar: 2
      }
    }

    expect(_mapAll(given, value => (value as number) + 1)).toEqual(expected)
  })
  it(`given array of objects, expect modify properties`, async () => {
    const given: KeyObject = {
      foo: 0,
      many: [
        {
          bar: "bar"
        },
        {
          bar: 5
        }
      ]
    }
    const expected = {
      foo: 1,
      many: [
        {
          bar: "bar"
        },
        {
          bar: 6
        }
      ]
    }

    expect(
      _mapAll(given, (value, key) => {
        if (typeof value === "string") return value
        return (value as number) + 1
      })
    ).toEqual(expected)
  })
  it(`given array not containing objects, expect leave those items alone`, async () => {
    const given: KeyObject = {
      foo: 0,
      many: [
        {
          bar: 5
        },
        "leave me alone"
      ]
    }
    const expected = {
      foo: 1,
      many: [
        {
          bar: 6
        },
        "leave me alone"
      ]
    }

    expect(_mapAll(given, (value, key) => (value as number) + 1)).toEqual(expected)
  })
  it(`given object, expect do not modify given object`, async () => {
    const given: KeyObject = {
      foo: 0,
      nested: {
        bar: 1
      }
    }
    const expected = {
      foo: 1,
      nested: {
        bar: 2
      }
    }

    const actual = _mapAll(given, value => (value as number) + 1)

    expect(expected).toEqual(actual)
    expect(actual).not.toEqual(given)
  })
})
