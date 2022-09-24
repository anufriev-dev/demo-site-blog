import { Container } from "@mui/system"
import style from "./style.module.scss"

function CopyrightFooter() {
  return (
  <Container>
      <p className={style.title}>
          Copyright © 2022 Ануфриев Георгий. Тираж 1 штука. Отпечатано на компьютере.
      </p>
  </Container>
  )
}

export default CopyrightFooter