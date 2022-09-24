import { signOut, useSession } from "next-auth/react"
import { AccountProps } from "src/types"
import { UserApi } from "src/http"
import { useRouter } from "next/router"


export default function useAccount(props: AccountProps) {
  const { isAdmin, date } = props

  const { data: session } = useSession()
  
  const router = useRouter()

  const delete_account = async () => {
    const statusText = await UserApi.delete()
    if(statusText === "OK") signOut()
    else alert("account not deleted")
  }

  const exit = () => signOut()

  return { isAdmin, date, delete_account, router, session, exit }
}