import { useRouter } from "next/router"
import { Pagination } from "@mui/material"
import { ChangeEvent } from "react"


const PaginationMui = (props) => {
  const { maxPages, currentPage} = props

  const router = useRouter()
  const search = router.query.search

  const onChange = (e: ChangeEvent<HTMLElement>, number) => {
    router.push(
      `/blog?page=${number}${search ? "&search="+ search : "" }`
    )
  }

  return (
    <Pagination
      count={maxPages}
      page={currentPage}
      onChange={onChange}
      shape="rounded"
      variant="outlined"
      color="primary"
    />
  )
}

export default PaginationMui
