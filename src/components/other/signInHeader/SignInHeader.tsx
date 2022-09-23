import { useSession } from "next-auth/react"
import Link from "next/link"
import { AvatarHeader } from "src/components"


function SignInHeader(props: any) {
  const { className } = props
  const { data: session } = useSession()

  return (
    <>
    { session 
        ? <AvatarHeader /> 
        : <Link href="#"><a className={className}>Гость</a></Link>
      }
    </>
  )
}

export default SignInHeader