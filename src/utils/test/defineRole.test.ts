import { defineRole } from "../"

describe("define role", () => {
  it("input ADMIN", () => {
    const role = "ADMIN"
    expect(defineRole(role)).toBe("1")
  })

  it("input USER", () => {
    const role = "USER"
    expect(defineRole(role)).toBe("2")
  })

  it("input 1 type number", () => {
    const role = 1
    expect(defineRole(role)).toBe("ADMIN")
  })

  it("input 2 type number", () => {
    const role = 2
    expect(defineRole(role)).toBe("USER")
  })

  it("input 1 type string", () => {
    const role = "1"
    expect(defineRole(role)).toBe("ADMIN")
  })

  it("input 2 type string", () => {
    const role = "2"
    expect(defineRole(role)).toBe("USER")
  })
})