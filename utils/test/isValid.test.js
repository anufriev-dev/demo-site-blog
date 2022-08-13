const isValid = require("../isValid.js")

describe("validator 3000",() => {

  it("&0", () => {
    const test = "Hello"
    const expected = true

    expect(isValid(test, { min: 5 })).toBe(expected)
  })

  it("&1", () => {
    const test = "Hello"
    const expected = false

    expect(isValid(test, { min: 6 })).toBe(expected)
  })

  it("&2", () => {
    const test = "Hello"
    const expected = true

    expect(isValid(test, { max: 5 })).toBe(expected)
  })

  it("&3", () => {
    const test = "Hello"
    const expected = false

    expect(isValid(test, { max: 4 })).toBe(expected)
  })

  it("&4", () => {
    const test = "Hello"
    const expected = true

    expect(isValid(test, { regexp: /Hello/ })).toBe(expected)
  })

  it("&5", () => {
    const test = "Hello"
    const expected = false

    expect(isValid(test, { regexp: /\d/ })).toBe(expected)
  })

  it("&6", () => {
    const test = "Hello"
    const expected = true

    expect(isValid(test, { min: 5, max: 10, regexp: /Hello/ })).toBe(expected)
  })

  it("&7", () => {
    const test = "Hello"
    const expected = false

    expect(isValid(test, { min: 6, max: 10, regexp: /Hello/ })).toBe(expected)
  })
})