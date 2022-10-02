import { signIn } from "next-auth/react"
import ButtonAuth from "../buttonAuth"
import style from "./style.module.scss"

function ProviderAccount({url}) {

  return (
    <div>
        <div className={style.blok}>
          <ButtonAuth provider="github" event={() => { signIn("github", { callbackUrl: url })} }/>
          <ButtonAuth provider="google" event={() => { signIn("google", { callbackUrl: url })} }/>
        </div>
    </div>
  )
}

export default ProviderAccount
