import { useRouter } from "next/router"


export default function useRefreshData() {
  const routher = useRouter()

  const refreshData = () => {
    routher.replace(routher.asPath)
  }
  return { refreshData }
}