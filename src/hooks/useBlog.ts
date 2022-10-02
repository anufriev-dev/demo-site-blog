import { IBlog } from "src/types"
import useTextEffect from "./useTextEffect"


export default function useBlog(props: IBlog) {
  const {
    data,allPosts,
    maxPages,currentPage
  } = props

    // effect текста
    useTextEffect(allPosts)

    return { data, maxPages, currentPage }
}
