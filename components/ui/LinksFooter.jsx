import { Grid } from "@mui/material"
import { Navbar } from "../../components"


export default function LinksFooter (props) {
  const { styles, data } = props
  
  return (  
    <Grid container >
      <Grid item xs={12} >
          <h3 className={ styles.title }>Ссылки</h3>
          <Navbar styles={ styles } data={ data } />
      </Grid>
    </Grid>
  )
}
