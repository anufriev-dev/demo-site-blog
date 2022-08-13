const convertDate = require("../convertDate")

describe("formatter date", () => {
  
  it("&1", () => {
    const test = "2001-01-28"
    const expected = "28 Января 2001"

    expect(convertDate(test)).toBe(expected)
  })

  it("&0", () => {
    const test = "2000-12-31"
    const expected = "31 Декабря 2000"

    expect(convertDate(test)).toBe(expected)
  })

})