import { createContext } from "react"

export const NavbarContext = createContext(null)

export function NavbarProvider({ data, children }) {

  return (
    <NavbarContext.Provider value={data}>
      { children }
    </NavbarContext.Provider>
  )
}
