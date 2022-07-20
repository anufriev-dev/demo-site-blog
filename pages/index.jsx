import { Container } from "@mui/system"
import Layout from "../components/other/layout/Layout"

export default function HomePage () {
  
  // const { data, error } = useSwr("/api/getUser",fetcher)

  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>

  return (
    <Layout>

      <Container>
        <h1 style={{fontFamily: "Montserrat-Regular"}}>Главная</h1>
      </Container>

    </Layout>
  )
}