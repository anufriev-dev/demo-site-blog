import { signIn } from "next-auth/react"
import { MouseEvent ,useEffect, useState } from "react"
import { RegExpEmail } from "config"
import { isValid, strDelay } from "src/utils"
import Router  from "next/router"


function useAuth () {
  const [email, setEmail] = useState<string>("")
  const [pass, setPass ] = useState<string>("")

  const [isErrorEmail, setErrorEmail] = useState<boolean>(false)
  const [isErrorPass, setErrorPass] = useState<boolean>(false)

  useEffect(() => {
    const text: string = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
    strDelay(text,"auth")
  },[])

  const eventForgetPasswd = (e) => {
    e.preventDefault()
    Router.push(process.env["NEXT_PUBLIC_FORGOTPASSWORD"])
  }

  const submitExit = async (e: MouseEvent<HTMLElement> ) => {
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

  const formProps = {
    id: "auth",
    title: "Вход"
  }

  const dropState = () => {
    setEmail("")
    setPass("")
  }

  return { email, pass, eventForgetPasswd, setEmail, setPass, isErrorEmail, isErrorPass, formProps, submitExit, Router }
}


export default useAuth
