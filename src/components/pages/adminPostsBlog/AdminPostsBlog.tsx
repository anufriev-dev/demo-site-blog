import { Container } from "@mui/system"
import { useEffect } from "react"
import { ButtonSubmit } from "src/components"
import { IAdminPostsBlog } from "src/types"
import Image from "next/image"
import { useAdminPostsBlog, useAdminPostsBlogDispatch } from "src/context"
import { ModalDelete, ModalUpdate, Snacks, NewPost } from "."
import style from "./style.module.scss"


export default function AdminPostsBlog(props: IAdminPostsBlog) {
  const { posts, state } = props
  
  // state
  const { filterPosts, active, snack, post } = useAdminPostsBlog()
  const dispatch = useAdminPostsBlogDispatch()

  // фильтрация
  useEffect(() => {
    dispatch({ type: "filter_posts", payload: posts.filter((el) =>
      Object.entries(el)
        .toString()
        .toLowerCase()
        .includes(state.trim().toLowerCase())
    )})
  }, [state,posts])

  // handles

  const handleDelete = (id) => {
    dispatch({ type: "open_modal_delete", id })
  }

  const handleUpdate = (el) => {
    dispatch({ 
      type: "open_modal_update", 
      id: el.post_id,
      category: el.category,
      summary: el.summary,
      text: el.text,
      img: el.src_img
    })
  }

  const newPost = () => {
    dispatch({ type: "drop_state_form" })
    dispatch({ type: "new_post_modal_toggle" })
  }
  
  // ui

  const buttonNewPost = !active.newPost &&
  <ButtonSubmit 
    className={style.buttonAddPost} 
    text="Новый пост" 
    event={() => newPost()} 
  />

  const tableBody = filterPosts.map((el) => (
    <tr className={style.tr} key={el.post_id}>
      <td className={style.td}>{el.post_id}</td>
      <td className={style.td}>{el.category}</td>
      <td className={style.td}>{el.summary}</td>
      <td className={`${style.td} ${style.text}`}>{el.text}</td>
      <td className={style.td}>{el.date}</td>
      <td className={`${style.td} ${style.imgTD}`}>
        <Image src={`/uploads/${el.src_img}`} width={"200"} height={"100"} alt="img"/>
      </td>
      <td>
        <ButtonSubmit 
          className={`${style.button} ${style.button_delete}`} 
          text="Удалить" event={() => handleDelete(el.post_id)}
        />
      </td>
      <td>
        <ButtonSubmit 
          className={`${style.button} ${style.button_change}`} 
          text="Изменить" event={() => handleUpdate(el) } 
        />
      </td>
    </tr>
  ))

  if(active.newPost) {
    return (
      <NewPost />
    )
  }

  return (
    <div>
      <Snacks key={"snacks"}/>
      <ModalDelete />
      <ModalUpdate />
      <div className={style.main}>
      <div className={style.wrappTable}>
        <Container>
          <div className={style.titleBox}>
            <h1 className={`text-h1 ${style.title}`}>Посты Блога</h1>
            <div>
              {buttonNewPost}
            </div>
          </div>
        </Container>
        <table>
          <thead>
          <tr className={style.tr}>
              <th className={style.th}>post_id</th>
              <th className={style.th}>category</th>
              <th className={style.th}>summary</th>
              <th className={style.th}>text</th>
              <th className={style.th}>date</th>
              <th className={style.th}>image</th>              
              <th colSpan={2} className={style.th}>Настройки</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
