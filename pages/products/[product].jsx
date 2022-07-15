import { useRouter } from "next/router"
import Link from "next/link"


export default function Products ({ data }) {


  const router = useRouter()

  const { product } = router.query

  return (
    <>
      <h1>Home Page: { product } { data.product }</h1>
      <Link href={ product }>
        <a>Перейти...</a>
      </Link>
    </>
  )
}

export function getStaticPaths () {

  return {
    paths: [
      {
        params: {
          product: "1"
        }
      },
      {
        params: {
          product: "2"
        }
      }
    ],
    fallback: false
  }
}

export function getStaticProps ({ params }) {

  return {
    props: {
      data: {
        product: params.product
      }
    }
  }
}