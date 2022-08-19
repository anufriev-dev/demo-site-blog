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
import strDelay from "../../../utils/strDelay.js"
/* styles
   -------------------------------------------------- */
import navBarStyles from "./styles/navBarLeft.module.scss"
import demoCardBlogStyles from "./styles/demoCardBlog.module.scss"
import indexStyles from "./styles/index.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataNavBarLeft } from "../../../fake_database/index.js"
import TopBarSearch from "../topBarSearch/TopBarSearch.jsx"
import { useEffect } from "react"
import timeEffect from "../../../utils/timeEffect"



export default function MainBlog({ post, posts, maxPages, currentPage }) {

  const router = useRouter()
  const search = router.query.search

  const text = router.query.search 
    ? `По запросу: "${ router.query.search }" Найдено постов: `
    : "Найдено: "
  
  // useEffect(() => {
  //   strDelay(text,"titleSearch")
  // },[text])

  // useEffect(() => {
  //   timeEffect(posts, "postsEffect")
  // }, [posts])

  useEffect(() => {
    document.getElementById("postsEffect").innerHTML = ""
    strDelay(text,"titleSearch")
    .then(() => {
      timeEffect(posts, "postsEffect")
    })
  
  }, [text,posts])


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
        <span id="titleSearch" className={indexStyles.title}></span>
        <span id="postsEffect" className={indexStyles.title}></span>
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
