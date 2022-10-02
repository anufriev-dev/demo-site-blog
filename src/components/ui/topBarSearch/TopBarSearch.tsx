import { Container, Grid } from "@mui/material"
import { Search } from "src/components"

// styles
import style from "./style.module.scss"

export default function TopBarSearch({ url }) {
  return (
    <div className={style.wrapp_topBar}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Search url={ url }/>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Container>
    </div>
  )
}
