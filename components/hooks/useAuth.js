import { signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import { RegExpEmail } from "../../config"
import { isValid, strDelay } from "../../utils"
import Router  from "next/router"


function useAuth () {
  const [email, setEmail] = useState("")
  const [pass, setPass ] = useState("")
  
  const [isErrorEmail, setErrorEmail] = useState(false)
  const [isErrorPass, setErrorPass] = useState(false)
  
  const text = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
  useEffect(() => {
    strDelay(text,"auth")
  }, [text])

  const submit = async (e) => {
    e.preventDefault()

    if(!isValid(email,{ regexp: RegExpEmail })) {
      setErrorEmail(true)
      return
    } else setErrorEmail(false)

    if(!isValid(pass, { min: 6 , max: 40})) {
      setErrorPass(true)
      return
    } else setErrorPass(false)

    const result = await signIn("Authorization", {
      email, 
      pass,
      redirect: false
     },)
     if(result.ok) {
      Router.push("/account")
     }else {
      setErrorEmail(true)
      setErrorPass(true)
      return
     }

    dropState()
  }

  const dropState = () => {
    setEmail("")
    setPass("")
  }

  return { email, pass, setEmail, setPass, submit, isErrorEmail, isErrorPass }
}


export default useAuth