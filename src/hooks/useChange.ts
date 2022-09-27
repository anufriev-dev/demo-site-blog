import { ChangeEvent, useState } from "react"
import { UserApi } from "src/http"
import { isValid } from "src/utils"
import { useRouter } from "next/router"

export default function useChange(props) {
  const { email } = props

  const [pass, setPass] = useState("")
  const [errorPass, setErrorPass] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)


  const handleHange = async (e: ChangeEvent<HTMLInputElement>) => {
    if(!isValid(pass, { min: 6, max: 40 })) {
      setErrorPass(true)
      return
    } else setErrorPass(false)

    const body = { pass, email }
    const statusText = await UserApi.change(body)
    if(statusText === "OK") {
      setIsSuccess(true)
    } else setIsSuccess(false)
  }

  return { pass, setPass, handleHange, errorPass, isSuccess }
}
