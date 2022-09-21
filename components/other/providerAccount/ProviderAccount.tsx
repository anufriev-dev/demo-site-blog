import { signIn } from "next-auth/react"

function ProviderAccount({url}) {

  return (
    <div>
        <p>Войти с помощю: </p>
          <button onClick={() => { signIn("github", { callbackUrl: url })} }>Github</button>
          <button onClick={() => { signIn("google", { callbackUrl: url })} }>Google</button>
    </div>
  )
}

export default ProviderAccount