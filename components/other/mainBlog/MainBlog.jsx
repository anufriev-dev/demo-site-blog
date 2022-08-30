import { useTextEffect } from "../../hooks"
/* components     
   -------------------------------------------------- */
import { DemoCardBlog,
   Navbar, PaginationMui, TopBarSearch  
} from "../../../components"
/* lib components
   -------------------------------------------------- */
import { Container } from "@mui/system"
import { Grid } from "@mui/material"
/* styles
   -------------------------------------------------- */
import navBarStyles from "./styles/navBarLeft.module.scss"
import demoCardBlogStyles from "./styles/demoCardBlog.module.scss"
import indexStyles from "./styles/index.module.scss"
/* fake data
   -------------------------------------------------- */
import { dataNavBarLeft } from "../../../fake_database/index.js"


export default function MainBlog(props) {
  const { post,
    posts, maxPages,
     currentPage 
  } = props

  // effect текста
  useTextEffect(posts)

  return (
    <>
    {/* Поиск по странице */}
    <TopBarSearch url={"/blog?page=1&search="} />

    <Container>
        <span id="titleSearch" className={indexStyles.title}></span>
        <span id="postsEffect" className={indexStyles.title}></span>
        {/* Постраничная навигация */}
        <PaginationMui maxPages={maxPages} currentPage={currentPage} />
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
        <PaginationMui maxPages={maxPages} currentPage={currentPage} />
        <br />
        <br />  
    </Container>
    </>
  )
}
