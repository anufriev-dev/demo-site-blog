import { signIn } from "next-auth/react"

function ProviderAccount() {

  return (
    <div>
        <p>Войти с помощю: </p>
          <button onClick={() => { signIn("github") } }>Github</button>
          <button onClick={() => { signIn("google") } }>Google</button>
    </div>
  )
}

export default ProviderAccount