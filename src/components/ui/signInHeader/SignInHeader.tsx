import { useSession } from "next-auth/react"
import Link from "next/link"
import { AvatarHeader } from "src/components"
import { Burger, IUser } from "src/types"


function SignInHeader(props: Burger & { className: string } & IUser ) {
  const { className } = props
  const { data: session } = useSession()

  return (
    <>
    { session
        ? <AvatarHeader user={props.user} />
        : <Link href="#"><a className={className}>Гость</a></Link>
      }
    </>
  )
}

export default SignInHeader
