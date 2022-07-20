const shorten = require("../utils/shorten.js")

describe("Returns a new string separated by dots: '.?!', up to 3 sentences", () => {

  it("&0", () => {
    const test     = "Hello world,this sentence without dots"
    const expected = "Hello world,this sentence without dots"

    expect(shorten(test)).toBe(expected)
  })

  it("&1", () => {

    const test   = "Hello world!"
    const expected = "Hello world!"

    expect(shorten(test)).toBe(expected)
  })

  it("&2", () => {

    const test   = "Hello World! My name is Gosha."
    const expected = "Hello World! My name is Gosha."

    expect(shorten(test)).toBe(expected)
  })

  it("&3", () => {
    const test     = "Hello World! My name is Gosha.I'm a programmer?"
    const expected = "Hello World! My name is Gosha.I'm a programmer?"

    expect(shorten(test)).toBe(expected)
  })


  it("&4", () => {
    const test     = "Hello World? My name is Gosha.I'm a programmer. This sentence is ignore! And it this too."
    const expected = "Hello World? My name is Gosha.I'm a programmer."

    expect(shorten(test)).toBe(expected)
  })
  
})