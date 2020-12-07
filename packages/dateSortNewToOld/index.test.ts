import _dateSortNewToOld from "."

describe("_dateSortNewToOld", () => {
  it(`given empty array, expect empty array`, async () => {
    const given: Date[] = []

    given.sort(_dateSortNewToOld)

    expect(given).toEqual([])
  })
  it(`given items already in order, expect unchanged`, async () => {
    const given: Date[] = [
      new Date("2020-04-04T16:00:00.000Z"),
      new Date("2018-04-04T16:00:00.000Z")
    ]
    const expected = given

    given.sort(_dateSortNewToOld)

    expect(given).toEqual(expected)
  })
  it(`given items not in order, expect to sort`, async () => {
    const given: Date[] = [
      new Date("2018-04-04T16:00:00.000Z"),
      new Date("2020-04-04T16:00:00.000Z")
    ]
    const expected = [given[1], given[0]]

    given.sort(_dateSortNewToOld)

    expect(given).toEqual(expected)
  })
  it(`given identical dates, expect unchanged`, async () => {
    const given: Date[] = [
      new Date("2018-04-04T16:00:00.000Z"),
      new Date("2018-04-04T16:00:00.000Z")
    ]
    const expected = given

    given.sort(_dateSortNewToOld)

    expect(given).toEqual(expected)
  })
})
