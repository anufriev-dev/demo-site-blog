const trim = require("../utils/trim.js")


describe("trim.js", () => {

  it("trim paths",() => {
    expect(trim("/")).toBe("/")
  })

  it("",() => {
    expect(trim("/api/product")).toBe("/api/product")
  })

  it("cuts paths getting rid of parameters", () => {
    expect(trim("/books/[post_id]")).toBe("/books")
  })

  it("",() => {
    expect(trim("/npm/username/accounts/lib/[name]"))
    .toBe("/npm/username/accounts/lib")
  })

  it("",() => {
    expect(trim("/blog/[post_id]/[video_id]")).toBe("/blog")
  })

  it("", () => {
    expect(trim("/docs/[Web]/[JavaScript]/index")).toBe("/docs")
  })

})