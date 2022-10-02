import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { NextJsActiveLink } from "src/components"
import { IUser } from "src/types"
import style from "./style.module.scss"


function AvatarHeader(props: IUser ) {
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
          name={props?.user?.name || session.user.name}
          classNameProps={style.user_name}
          href={process.env["NEXT_PUBLIC_ACCOUNT"]}
        />
    </div>
  )
}

export default AvatarHeader
