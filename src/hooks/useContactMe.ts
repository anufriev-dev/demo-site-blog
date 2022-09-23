import { useEffect, useState } from "react"
import { strDelay } from "src/utils"
import { useSession } from "next-auth/react"


function useContactMe () {
  const [email, setEmail] = useState<string>("")
  const [area, setArea] = useState<string>("")

  const { data: session } = useSession()
  
  const text: string = "Убедись, что e-mail верный, иначе ответ не дойдет"
  useEffect(() => {
    strDelay(text,"textWarning")
    session && setEmail(session.user.email)
  },[text, session])

  const dropState = () => {
    setEmail("")
    setArea("")
  }

  return { email, area, setEmail, setArea, dropState }
}


export default useContactMe