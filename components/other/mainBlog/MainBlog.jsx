import { useRouter } from "next/router.js"
/* components     
   -------------------------------------------------- */
import DemoCardBlog from "../../ui/DemoCard.jsx"
import Navbar from "../../ui/Navbar"
/* lib components
   -------------------------------------------------- */
import { Container } from "@mui/system"
import { Grid } from "@mui/material"
import { Pagination } from "@mui/material"
/* styles
   -------------------------------------------------- */
import navBarStyles from "./styles/navBarLeft.module.scss"
import demoCardBlogStyles from "./styles/demoCardBlog.module.scss"
import indexStyles from "./styles/index.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataNavBarLeft } from "../../../fake_database/index.js"
import TopBarSearch from "../tobBarSearch/TopBarSearch.jsx"



export default function MainBlog({ post, posts, maxPages, currentPage }) {

  const router = useRouter()
  const search = router.query.search

  /* JSX Component */
  const pagination = (
    <Pagination 
      count={maxPages} 
      page={currentPage} 
      onChange={(e,number) => router.push(`/blog?page=${number}${search ? "&search="+ search : "" }`)} 

      shape="rounded" 
      variant="outlined"
      color="primary"
    />
  )

  return (
    <>
    {/* Поиск по странице */}
    <TopBarSearch url={"/blog?page=1&search="} />

    <Container>
        {
          router.query.search
            ? <h3 className={indexStyles.title}>По запросу: &#34;{ router.query.search }&#34; Найдено постов: { posts }</h3>
            : <h3 className={indexStyles.title}>Найдено:  { posts }</h3>
        }
        {/* Постраничная навигация */}
        {pagination}
        {/* Main */}
      <Grid container columnSpacing={{xl:9,xs:5}} rowSpacing={{xl: 2, xs: 4}}>
        <Grid item xs={12} md={9} >
          {/* Main content */}
          <DemoCardBlog routherType={"blog"} dataBlog={post} styles={demoCardBlogStyles} />
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Категории */}
          <h2 className={navBarStyles.title} >Категории:</h2>
          <Navbar styles={navBarStyles} data={dataNavBarLeft} />
        </Grid>
      </Grid>
        {/* Постраничная навигация */}
        { pagination }
        <br />
        <br />  
    </Container>
    </>
  )
}
