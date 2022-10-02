import { render ,screen } from "@testing-library/react"
import { Comment } from "src/components"

const commentJSON = {
  author: "Gosha",
  date: "2000-12-31",
  text: "Some text"
}

describe("Comment component", () => {

  it("Render a Comment", () => {
    render(<Comment comment={commentJSON} />)

    expect(screen.getByText(/gosha/i)).toBeInTheDocument()
    expect(screen.getByText(/31 Декабря 2000/i)).toBeInTheDocument()
    expect(screen.getByText(/some text/i)).toBeInTheDocument()
  })

})
