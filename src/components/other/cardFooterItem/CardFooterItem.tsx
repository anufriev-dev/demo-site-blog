import { Grid } from "@mui/material"
import { NextJsActiveLink } from "src/components"

function CardFooterItem(props) {

  const { style, item } = props

  return (
  <Grid item xs={12} md={6}>
    <div className={ style.reverseWrap }>
      <h3 className={ style.title }>{ item.title }</h3>
      <p className={ style.content }>{ item.text }</p>

      {item.namelink && 
        <NextJsActiveLink 
          href={ item.href }
            name={ item.namelink }
          classNameProps={ style.link }
        /> 
          }
    </div>
  </Grid>
  )
}

export default CardFooterItem