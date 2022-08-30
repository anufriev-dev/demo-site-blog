import { useEffect, useState } from "react"
import { strDelay } from "../../utils"


function useRegistration () {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")
  const [name, setName] = useState("")
  
  const text = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
  useEffect(() => {
    strDelay(text,"auth")
  }, [text])

  const dropState = () => {
    setEmail("")
    setPass("")
    setName("")
  }

  return { email, pass, name, setEmail, setPass, setName, dropState }
}


export default useRegistration