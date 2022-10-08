import { RegExpEmail } from "config"
import { useState } from "react"
import { Email } from "src/http"
import { isValid } from "src/utils"

export default function useForgotpassword() {
  const [email, setEmail] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [isErrorEmail, setErrorEmail] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)


  const handler = async () => {
    setLoading(true)
    if(!isValid(email,{ regexp: RegExpEmail })) {
      setLoading(false)
      setErrorEmail(true)
      return
    }else setErrorEmail(false)

    await Email.change({email})
    // logic
    setLoading(false)
    setIsActive(!isActive)
  }

  return { email, isActive, handler, setEmail, isErrorEmail, loading }
}
