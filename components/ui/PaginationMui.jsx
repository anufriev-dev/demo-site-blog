import { useRouter } from "next/router"
import { Pagination } from "@mui/material"

const PaginationMui = (props) => {
  const { maxPages, currentPage} = props

  const router = useRouter()
  const search = router.query.search
  
  return (
    <Pagination 
      count={maxPages} 
      page={currentPage} 
      onChange={(e,number) => {
      router.push(`/blog?page=${number}${search ? "&search="+ search : "" }`)
        }
      } 
      shape="rounded" 
      variant="outlined"
      color="primary"
    />
  )
}

export default PaginationMui