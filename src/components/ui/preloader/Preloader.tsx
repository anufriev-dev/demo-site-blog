import { CircularProgress } from "@mui/material"
import style from "./style.module.scss"

function Preloader() {
  return (
    <div className={style.preloader}>
      <CircularProgress  color="success" />
      <p>Loading . . .</p>
    </div>
  )
}

export default Preloader
