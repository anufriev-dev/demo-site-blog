import { useEffect, useState } from "react"
import { UserApi } from "src/http"
import { useRefreshData } from "src/hooks"
import { IAdminUser } from "src/types"


export default function useAdminUser(props: IAdminUser) {
  const { state, users } = props

  const { refreshData } = useRefreshData()
  const [activeDelete, setActiveDelete] = useState(false)
  const [activeChange, setActiveChange] = useState(false)
  const [snack, setSnack] = useState(false)

  const [filterUsers, setFilterUsers] = useState(users)

  const [data, setData] = useState<any>({})

  useEffect(() => {
    setFilterUsers(users.filter((el) =>
      el.name.toLowerCase()
        .includes(state.toLowerCase())
    ))
  },[state, users])

  const _delete = async (id) => {
    const statusText = await UserApi.delete(id)
    
    if(statusText === "OK") {
      setActiveDelete(false)
      setSnack(true)
      refreshData()
      setFilterUsers(users)
    }
  }

  const onCloseSnack = () => {
    setSnack(false)
  }


  return {
     activeDelete, activeChange,
     setActiveDelete, setActiveChange,
     _delete, data, setData, snack, setSnack,
     onCloseSnack, filterUsers
  }
}
