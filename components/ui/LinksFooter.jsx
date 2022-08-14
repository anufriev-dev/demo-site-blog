import { Grid } from "@mui/material"
import Navbar from "./Navbar.jsx"


export default function LinksFooter ({ styles, data }) {
  return (  
    <Grid container >
      <Grid item xs={12} >
          <h3 className={ styles.title }>Ссылки</h3>
          <Navbar styles={ styles } data={ data } />
      </Grid>
    </Grid>
  )
}
