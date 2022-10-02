import { useState } from "react"
import { IuseLayoutAdmin } from "src/types"


export default function useLayoutAdmin() : IuseLayoutAdmin  {
  const [search, setSearch] = useState("")

  const props = {
    setState: setSearch,
    state: search
  }

  return { props }
}
