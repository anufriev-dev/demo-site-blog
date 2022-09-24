import { Grid } from "@mui/material"
import { CardFooterItem } from "src/components"
import styles from "./style.module.scss"
import { CardFooterProps } from "src/types"



export default function CardFooter(props: CardFooterProps ) {
  const { card } = props

  if(!card) return <h1>Loading</h1>
  
  return (
    <Grid container={ true } spacing={3} rowSpacing={6}>
      {card.map((it,index) => (
          <CardFooterItem key={index} style={styles} item={it} />
        ))
          }
    </Grid>
  )
}
