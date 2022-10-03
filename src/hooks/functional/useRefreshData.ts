import { useRouter } from "next/router"


export default function useRefreshData() {
  const router = useRouter()

  const refreshData = () => {
    router.replace(router.asPath)
  }
  return { refreshData }
}
