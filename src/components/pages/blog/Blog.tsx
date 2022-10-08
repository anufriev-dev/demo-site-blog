import { DemoCardBlog, Navbar, PaginationMui, TopBarSearch  } from "src/components"
import { useBlog } from "src/hooks"
import { IBlog } from "src/types"
import { Container } from "@mui/system"
import { Grid } from "@mui/material"

import { dataNavBarLeft } from "config/filling_data"
import style from "./style.module.scss"


export default function Blog(props: IBlog) {
  const { data, maxPages, currentPage } = useBlog(props)

  return (
    <>
    {/* Поиск по странице */}
    <TopBarSearch url={"/blog?page=1&search="} />

    <Container>
        <span id="titleSearch" className={style.title}></span>
        <span id="postsEffect" className={style.title}></span>
        {/* Постраничная навигация */}
        <PaginationMui maxPages={maxPages} currentPage={currentPage} />
        {/* Main */}
      <Grid container columnSpacing={{xl:9,xs:5}} rowSpacing={{xl: 2, xs: 4}}>
        <Grid item xs={12} md={9} >
          {/* Main content */}
          <DemoCardBlog routherType={"blog"} dataBlog={data}/>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* Категории */}
          <aside>
            <h2 className={style.title} >Категории:</h2>
            <Navbar  styles={style} data={dataNavBarLeft} />
          </aside>
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
