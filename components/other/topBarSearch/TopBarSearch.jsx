import { Container, Grid } from "@mui/material"
import Search from "../../ui/Search"

// styles
import searchStyles from "./scss/topBarSearch.module.scss"

export default function TopBarSearch({ url }) {
  return (
    <div className={searchStyles.wrapp_topBar}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Search styles={searchStyles} url={url}/>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  )
}