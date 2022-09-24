import { render ,screen } from "@testing-library/react"
import { Warning } from "src/components"


describe("Warning component", () => {

  it("Render a component", () => {
    render(<Warning />)
    const text = 
      /паника, что-то случилось!!! Ничего не найдено в комментариях. Срочно нужно что-то добавить, чтобы это место не оставалось пустым./i
    expect(screen.getByText(text)).toBeInTheDocument()
  })

})