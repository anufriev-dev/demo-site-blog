import { useState, MouseEvent } from "react"
import { UserApi } from "src/http"
import { isValid } from "src/utils"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRefreshData } from "."

export default function useAccountProfile () {
  const [activeChange, setActiveChange] = useState(false)
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(false)
  const { data: session } = useSession()
  const { refreshData } = useRefreshData()

  const handleChange = (e: MouseEvent<HTMLAreaElement>) => {
    e.preventDefault()
    setActiveChange(!activeChange)
  }

  const save = async () => {
    if(!isValid(name, { min: 2, max: 20 })) {
      setErrorName(true)
      return
    } else setErrorName(false)

    const statusText = await UserApi.changeName({name, email: session.user.email })

    if(statusText === "OK"){
      console.log("Успех")
      refreshData()
    }else {
      alert("Имя не изменено")
    }
    setActiveChange(!activeChange)
    setName("")
  }

  return { handleChange, save, activeChange, name, setName, errorName }
}
