import { useEffect, useState } from "react"
import { IAdminProps } from "src/types"

type dataList = {name: string, link: string}[]

export default function useAdmin(props: IAdminProps, dataList: dataList) {
  const { state } = props

  const data = dataList
  const [fitlerSearch,setFilterSearch] = useState([])

  useEffect(() => {
    setFilterSearch(data.filter((el) =>
      el.name.toLowerCase()
        .includes(state.toLowerCase())
    ))
  },[state, data])

  return { fitlerSearch }
}
