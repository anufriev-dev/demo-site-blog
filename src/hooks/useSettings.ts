import { signOut } from "next-auth/react"
import { UserApi } from "src/http"


function useSettings () {

  const delete_account = async () => {
    const statusText = await UserApi.delete()
    if(statusText === "OK") signOut()
    else alert("account not deleted")
  }

  const exit = () => signOut()

  return { delete_account, exit }
}

export default useSettings
