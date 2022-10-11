import { AppBar } from "@mui/material"
import { Container } from "@mui/system"
import { SearchUniversal, NextLink } from "src/components"
import style from "./style.module.scss"
import { useRouter } from "next/router"

interface ILayputAdmin {
  children: JSX.Element,
  state: string,
  setState(e: string): void,
}


function LayoutAdmin (props: ILayputAdmin ) {
  const { children, state, setState } = props
  const router = useRouter()

    
  return (
    <div className={style.layoutAdmin}>
      <div className={style.bar}>
        <AppBar className={style.appBarFirst} color="transparent" position="relative">
          <Container>
            <div className={style.appBarFirstWrapp}>
              <div>
                <NextLink  href="/admin" text="Админка" className={`${style.linkAdmin} ${style.link}`} />
                <NextLink  href="/" text="Сайт" className={style.linkAdmin} />
              </div>
              <NextLink  onClick={() => router.back()} text="Назад" className={style.linkAdmin} />
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
        </div>
        <main className={style.main}>
          { children }
        </main>
    </div>
  )
}

export default LayoutAdmin
