import { render ,screen } from "@testing-library/react"
import ErrorComments from "../ErrorComment"


describe("ErrorComments component", () => {

  it("Render a component", () => {
    render(<ErrorComments />)

    expect(screen.getByText(/комментарий не удалось отправить/i)).toBeInTheDocument()
  })

})