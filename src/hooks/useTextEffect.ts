import { useRouter } from "next/router"
import { useEffect } from "react"
import { strDelay, timeEffect } from "src/utils"


function useTextEffect (posts: number) {

  const router = useRouter()

  const text: string = router.query.search 
    ? `По запросу: "${ router.query.search }" Найдено постов: `
    : "Найдено: "
  
  useEffect(() => {
    document.getElementById("postsEffect").textContent = ""
    strDelay(text,"titleSearch")
    .then(() => {
      timeEffect(posts, "postsEffect")
    })
  }, [text,posts])
}

export default useTextEffect