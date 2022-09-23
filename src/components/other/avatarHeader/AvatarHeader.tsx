import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { NextJsActiveLink } from "src/components"
import style from "./style.module.scss"


function AvatarHeader() {
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div 
      className={style.user_veryfy}
        onClick={() => router.push(
          process.env["NEXT_PUBLIC_ACCOUNT"]
        )} 
    >
        <NextJsActiveLink 
          name={session.user.name} 
          classNameProps={style.user_name}
          href={process.env["NEXT_PUBLIC_ACCOUNT"]} 
        />
        {session.user.image &&
          <Image 
            className={style.avatar} 
            src={session.user.image} 
            alt="avatar" width={30} height={30} 
          />
            }
    </div>
  )
}

export default AvatarHeader