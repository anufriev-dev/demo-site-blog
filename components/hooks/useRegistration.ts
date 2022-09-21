import { signIn } from "next-auth/react"
import { MouseEvent,useEffect, useState } from "react"
import { RegExpEmail } from "../../config"
import { strDelay,isValid } from "../../utils"
import Router from "next/router"


function useRegistration () {
  const [email, setEmail] = useState<string>("")
  const [pass, setPass ] = useState<string>("")
  const [name, setName] = useState<string>("")

  const [isErrorEmail, setErrorEmail] = useState<boolean>(false)
  const [isErrorPass, setErrorPass] = useState<boolean>(false)
  const [isErrorName, setErrorName] = useState<boolean>(false)
  
  const text: string = "Авторизация на сайте пока не обязательна, но в будующем, будет много фичей"
  useEffect(() => {
    strDelay(text,"auth")
  }, [text])

  const submit = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    
    if(!isValid(name, { min: 2, max: 20 })) {
      setErrorName(true)
      return
    }else setErrorName(false)
    
    if(!isValid(email,{ regexp: RegExpEmail })) {
      setErrorEmail(true)
      return
    }else setErrorEmail(false)

    if(!isValid(pass, { min: 6 , max: 40})) {
      setErrorPass(true)
      return
    }else setErrorPass(false)

    const result = await signIn("Registration", { 
      email, 
      pass, 
      name,
      redirect: false
    })
    
    if(result.ok) {
      Router.push("/account")
    }else {
      setErrorName(true)
      setErrorEmail(true)
      setErrorPass(true)
      return
    }
    
    dropState()
  }

  const dropState = () => {
    setEmail("")
    setPass("")
    setName("")
  }

  return { 
    email, pass, name, setEmail, setPass, setName, submit,
    isErrorEmail, isErrorPass, isErrorName
  }
}


export default useRegistration