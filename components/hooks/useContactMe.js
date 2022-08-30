import { useEffect, useState } from "react"
import { strDelay } from "../../utils"


function useContactMe () {
  const [email, setEmail] = useState("")
  const [area, setArea] = useState("")
  
  const text = "Убедись, что e-mail верный, иначе ответ не дойдет"
  useEffect(() => {
    strDelay(text,"textWarning")
  },[text])

  const dropState = () => {
    setEmail("")
    setArea("")
  }

  return { email, area, setEmail, setArea, dropState }
}


export default useContactMe