import { render, screen } from "@testing-library/react"

import Hello from "./Hello"


test("test 1", () => {
  render(<Hello />)

  expect(screen.getByText(/Hello/)).toBeInTheDocument()
})