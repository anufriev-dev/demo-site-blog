import useSwr from "swr"
import { fetcher } from "../utils/fetcher"
import Layout from "../components/other/layout/Layout"

import styles from "../styles/pages/index.module.scss"


export default function HomePage () {
  
  // const { data, error } = useSwr("/api/getUser",fetcher)

  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>

  return (
    <Layout>

      <p>Main content</p>

    </Layout>
  )
}