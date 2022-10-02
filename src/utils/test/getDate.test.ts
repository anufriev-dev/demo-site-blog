import { getDate } from "../"
// TODO - зафиксить
describe("convert date in formar: 2000-12-31", () => {
  it("&1", () => {
    const date = new Date("2000-12-31T00:00:00.000Z")
    expect(getDate(date)).toBe("2000-12-31")
  })

  it("&2", () => {
    const date = new Date("2000-12-31T23:59:59.000Z")
    expect(getDate(date)).toBe("2000-12-31")
  })
})
