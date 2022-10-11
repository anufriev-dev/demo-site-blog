import { useRouter } from "next/router"


function useRouterPath() {
  const router = useRouter()
  const route = router.pathname

  return route
}

export default useRouterPath
