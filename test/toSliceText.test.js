const toSliceText = require("../utils/toSliceText.js")

describe("Returns a new string separated by dots: '.?!', up to 3 sentences default", () => {

  it("&0", () => {
    const test     = "Hello world,this sentence without dots"
    const expected = "Hello world,this sentence without dots"

    expect(toSliceText(test)).toBe(expected)
  })

  it("&1", () => {

    const test   = "Hello world!"
    const expected = "Hello world!"

    expect(toSliceText(test)).toBe(expected)
  })

  it("&2", () => {

    const test   = "Hello World! My name is Gosha."
    const expected = "Hello World! My name is Gosha."

    expect(toSliceText(test)).toBe(expected)
  })

  it("&3", () => {
    const test     = "Hello World! My name is Gosha.I'm a programmer?"
    const expected = "Hello World! My name is Gosha.I'm a programmer?"

    expect(toSliceText(test)).toBe(expected)
  })

  it("&4", () => {
    const test     = "Hello World? My name is Gosha.I'm a programmer. This sentence is ignore! And it this too."
    const expected = "Hello World? My name is Gosha.I'm a programmer."

    expect(toSliceText(test)).toBe(expected)
  })

  it("&5 without space between sentences US",() => {
    const test     = "Hello World?My name is Gosha.I'm a programmer.This sentence is ignore!And it this too."
    const expected = "Hello World?My name is Gosha.I'm a programmer."

    expect(toSliceText(test)).toBe(expected)
  })
  it("&5 without space between sentences RU",() => {
    const test     = "Привет мир?Меня зовут Гоша.Я программист!!!Это предложение не сработает!И это тоже."
    const expected = "Привет мир?Меня зовут Гоша.Я программист!!!"

    expect(toSliceText(test)).toBe(expected)
  })
  
})