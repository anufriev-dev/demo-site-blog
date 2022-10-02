import Image from "next/image"
import { MouseEventHandler } from "react"

const text = {
  google: "Log in with Google",
  github: "Log in with GitHub"
}
const style = {
  google: "google_provider",
  github: "github_provider"
}

function ButtonAuth(props: { provider: "github" | "google", event: MouseEventHandler<HTMLElement>}) {

  const { provider, event } = props

  return (
    <>
      <button onClick={event} className={`buttonAuth ${style[provider]}`}>
        <Image className={"buttonAuth__svg"} src={`/assets/${provider}-icon.svg`} alt="svg" width="18" height="18" />
          <span>{ text[provider] }</span>
      </button>
    </>
  )
}

export default ButtonAuth
