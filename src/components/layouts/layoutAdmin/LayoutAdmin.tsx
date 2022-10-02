import { AppBar } from "@mui/material"
import { Container } from "@mui/system"
import { SearchUniversal, NextLink } from "src/components"
import style from "./style.module.scss"
import Router from "next/router"

interface ILayputAdmin {
  children: JSX.Element,
  state: string,
  setState(e: string): void,
}

function LayoutAdmin (props: ILayputAdmin ) {
  const { children, state, setState } = props
    
  return (
    <div>
        <AppBar className={style.appBarFirst} color="transparent" position="relative">
          <Container>
            <div className={style.appBarFirstWrapp}>
              <div>
                <NextLink  href="/admin" text="Админка" className={`${style.linkAdmin} ${style.link}`} />
                <NextLink  href="/" text="Сайт" className={style.linkAdmin} />
              </div>
              <NextLink  onClick={() => Router.back()} text="Назад" className={style.linkAdmin} />
            </div>
          </Container>
        </AppBar>
        <AppBar className={style.appBarSecond} position="relative">
          <Container>
            <div className={style.search}>
              <SearchUniversal state={state} setState={setState}  />
            </div>
          </Container>
        </AppBar>
      <main className={style.main}>
        { children }
      </main>
    </div>
  )
}

export default LayoutAdmin
