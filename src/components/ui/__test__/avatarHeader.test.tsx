import { render, screen } from "@testing-library/react"
import { debug } from "console"
import { AvatarHeader } from "src/components"


describe("AvatarHeader component", () => {
  it("", () => {
    const { container } = render(<AvatarHeader />)
    expect(container).toMatchSnapshot()
  })
})
