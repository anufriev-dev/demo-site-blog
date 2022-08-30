import { useRouter } from "next/router"
import { useState } from "react"

function useSearch (url) {
  const router = useRouter()
  
  const [search, setSearch] = useState("")

  const handlerClick = async () => {
    router.push(`${url ? url : "/"}${search}`)
    setSearch("")
  }
  return { search, setSearch, handlerClick }
}

export default useSearch