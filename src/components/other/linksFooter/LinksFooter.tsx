import { Grid } from "@mui/material"
import { Navbar } from "src/components"
import { LinksFooterProps } from "src/types"
import styles from "./style.module.scss"


export default function LinksFooter (props:LinksFooterProps ) {
  const { data } = props
  
  return (  
    <Grid container >
      <Grid item xs={12} >
          <h3 className={ styles.title }>Ссылки</h3>
          <Navbar styles={ styles } data={ data } />
      </Grid>
    </Grid>
  )
}
