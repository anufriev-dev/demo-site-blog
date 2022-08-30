import { useEffect, useState } from "react"
import { strDelay } from "../../utils"


function useAuth () {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")
  
  const text = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
  useEffect(() => {
    strDelay(text,"auth")
  }, [text])

  const dropState = () => {
    setEmail("")
    setPass("")
  }

  return { email, pass, setEmail, setPass, dropState }
}


export default useAuth