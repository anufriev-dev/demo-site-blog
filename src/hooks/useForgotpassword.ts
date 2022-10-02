import { RegExpEmail } from "config"
import { useState } from "react"
import { Email } from "src/http"
import { isValid } from "src/utils"

export default function useForgotpassword() {
  const [email, setEmail] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [isErrorEmail, setErrorEmail] = useState<boolean>(false)

  const handler = async () => {
    if(!isValid(email,{ regexp: RegExpEmail })) {
      setErrorEmail(true)
      return
    }else setErrorEmail(false)

    await Email.change({email})
    // logic
    setIsActive(!isActive)
  }

  return { email, isActive, handler, setEmail, isErrorEmail }
}
