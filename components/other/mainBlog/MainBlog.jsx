// components
import CardBlog from "../cardBlog/CardBlog"
import Navbar from "../../ui/Navbar"
// lib components
import { Container } from "@mui/system"
import { Grid } from "@mui/material"


/* styles
   -------------------------------------------------- */
import navBarStyles from "./styles/navBarLeft.module.scss"
import cardBlogStyles from "./styles/cardBlog.module.scss"
import indexStyles from "./styles/index.module.scss"


// fake data
const dataNavBarLeft = [
  {namelink: "Apple", href: "/category/Apple"},
  {namelink: "Болтовня", href: "#"},
  {namelink: "Деньги", href: "#"},
  {namelink: "Книга", href: "#"},
  {namelink: "Конференция", href: "#"},
  {namelink: "ИТ Книга", href: "#"},
  {namelink: "Программы", href: "#"},
  {namelink: "Поисковик", href: "#"},
  {namelink: "Microsoft", href: "#"},
]

//fake data
const dataBlog = [
  {
    id: 1,
    postName: "Kupil_noutbuk_ot_Apple",
    categoryhref: "/category/Apple",
    category: "Apple",
    date: "04 Июля 2022",
    comments: 2,
    text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что.\
    Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что. \
    Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что.",
    src: "https://placehold.jp/1920x1080.png",
    title: "Купил ноутбук от Apple",
  },
  {
    id: 2,
    postName: "Neshtiaki_ot_Apple",
    categoryhref: "/category/Apple",
    category: "Apple",
    date: "04 Июля 2022",
    comments: 2,
    text: "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что.\
    Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что. \
    Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Что своих океана, моей но большой, образ вопрос запятой повстречался использовало приставка вдали, щеке ручеек злых заманивший дороге! Однажды, что.",
    src: "https://placehold.jp/1920x1080.png",
    title: "Нештяки от Apple",
  },
]



export default function MainBlog() {
  return (
    <Container>
     <h1 className={indexStyles.title}>Блог</h1>
      <Grid container columnSpacing={9} rowSpacing={9}>
        <Grid item xs={12} md={9} >
          <CardBlog dataBlog={dataBlog} styles={cardBlogStyles} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Navbar styles={navBarStyles} data={dataNavBarLeft} />
        </Grid>
      </Grid>

  </Container>
  )
}