// components
import DemoCardBlog from "../../ui/DemoCard.jsx"
import Navbar from "../../ui/Navbar"
// lib components
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



export default function MainBlog({ post }) {


  if(!post) return <h1>Loading</h1>

  return (
    <Container>
     <h1 className={indexStyles.title}>Блог</h1>
      <Grid container columnSpacing={{xl:9,xs:2}} rowSpacing={{xl: 9, xs: 2}}>
        <Grid item xs={12} md={9} >
          <DemoCardBlog routherType={"blog"} dataBlog={post} styles={demoCardBlogStyles} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Navbar styles={navBarStyles} data={dataNavBarLeft} />
        </Grid>
      </Grid>
    </Container>
  )
}