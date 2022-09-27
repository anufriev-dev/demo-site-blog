import { GetServerSideProps } from "next"
import { Home, Layout } from "src/components"
import { Posts } from "src/model"
import { IHomePage } from "src/types"


export default function HomePage(props: IHomePage) {
  if(!props) return <h1>Loading...</h1>
  return (
    <Layout>
      <Home data={props.data} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await Posts.getLastComments(6)

  return {
    props: {
      data: result
    }
  }
}