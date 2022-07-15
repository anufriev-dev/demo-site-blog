import { Grid } from "@mui/material"
import NextJsLink from "./NextJsLink.jsx"


export default function CardFooter({ styles, card }) {
  return (
    <Grid container={true} spacing={3} rowSpacing={6}>
      {
        card.map((it,index) => (
          <Grid key={index} item xs={12} md={6}>
            <div className={styles.reverseWrap}>
              <h3 className={styles.title}>{ it.title }</h3>
              <p className={styles.content}>{ it.text }</p>

            { it.namelink && <NextJsLink href={it.href} name={it.namelink} styles={styles}/> }
            
            </div>
          </Grid>
        ))
      }
    </Grid>
  )
}

