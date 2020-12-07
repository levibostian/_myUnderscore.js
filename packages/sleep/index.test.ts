import _sleep from "."

describe("_sleep", () => {
  it(`given sleep, expect to sleep`, async () => {
    const timeBefore = new Date().getTime()

    await _sleep(100)

    const timeAfter = new Date().getTime()

    const difference = timeAfter - timeBefore

    expect(difference).toBeGreaterThanOrEqual(100)
    expect(difference).toBeLessThanOrEqual(200)
  })
})
