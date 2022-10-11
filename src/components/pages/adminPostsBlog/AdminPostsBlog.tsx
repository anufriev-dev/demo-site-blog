import { Snackbar } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { Modal, ButtonSubmit, InputLabel, TextArea, Label } from "src/components"
import { BlogApi } from "src/http"
import { useRefreshData,  } from "src/hooks"
import { isValid } from "src/utils"
import { IAdminPostsBlog } from "src/types"
import Image from "next/image"

import style from "./style.module.scss"


function ModalDelete({
  onActive,
  active,
  handleDelete,
  data
}) {
  return (
    <Modal active={active} onActive={onActive} >
      <p className="text">Удалить пост c id = &#34;{data.post_id}&#34; со всеми его комментариями?</p>
      <div className={style.modal__delete_buttons}>
        <ButtonSubmit event={() => onActive(!active) } text="Отмена" />
        <ButtonSubmit event={() => handleDelete(data.post_id)} text="Удалить" />
      </div>
    </Modal>
  )
}

function ModalUpdate({
  onActive,
  post,
  onPost,
  handleUpdate,
  active
}) {
  return (
    <Modal active={active.change} onActive={() => onActive(false)} >
      <p className="text">Изменить пост c id = &#34;{post.post_id}&#34;?</p>
      <input 
        type="file" 
        onChange={(e) => onPost({ ...post, img: e.target.files[0] }) } 
      />
      <InputLabel 
        state={post.category} 
        setState={(value) => onPost({ ...post, category: value })} 
        id={"catg"} 
        text="category"
      />
      <InputLabel 
        state={post.summary} 
        setState={(value) => onPost({ ...post, summary: value })} 
        id={"summary"} 
        text="summary"
      />
      <Label 
        classNames={style.AreaLable} 
        text="Text" 
        id={"textarea"} 
      />
      <TextArea 
        id="textarea" 
        state={post.text} 
        setState={(value) => onPost({ ...post, text: value })}
      />
      <div className={style.modal__delete_buttons}>
        <ButtonSubmit event={() => onActive(!active) } text="Отмена" />
        <ButtonSubmit event={handleUpdate} text="Изменить" />
      </div>
    </Modal>
  )
}



function Snacks({
  onSneck,
  snack
}) {
  return (
    <>
      <Snackbar onClose={() => onSneck({ ...snack, delete: false })}
        autoHideDuration={6000}
        open={snack.delete} message="Пост удалён"
      />
      <Snackbar onClose={() => onSneck({ ...snack, change: false })}
        autoHideDuration={6000}
        open={snack.change} message="Пост изменен"
      />
      <Snackbar onClose={() => onSneck({ ...snack, create: false })}
        autoHideDuration={6000}
        open={snack.create} message="Пост создан"
      />
      <Snackbar onClose={() => onSneck({ ...snack, add: false })}
        autoHideDuration={6000}
        open={snack.add} message="Ошибка добавления"
      />
    </>
  )
}


export default function AdminPostsBlog(props: IAdminPostsBlog) {
  const { posts, state } = props

  const { refreshData } = useRefreshData()
  const [filterPosts, setFilterPosts] = useState(posts)
  const [active, setActive] = useState({ delete: false, change: false, newPost: false })

  const [snack, setSnack] = useState({
     delete: false, 
     change: false, 
     create: false ,
     add: false
  })

  const [post, setPost] = useState({
    post_id: "",
    category: "",
    summary: "",
    img: null,
    img_name: "",
    text: ""
  })


  // фильтрация
  useEffect(() => {
    setFilterPosts(posts.filter((el) =>
      Object.entries(el)
        .toString()
        .toLowerCase()
        .includes(state.trim().toLowerCase())
    ))
  }, [state,posts])

  // handles
  const _delete = async (id) => {
    const statusText = await BlogApi.deletePost(id)
    if(!isValid(+id, { sign: true })) {
      setActive({ ...active, delete: false})
      return
    }
    if(statusText === "OK") {
      setActive({ ...active, delete: false})
      setSnack({ ...snack, delete: true })
      refreshData()
    }
  }

  const _update = async () => {
    if(
      !isValid(post.category,{ min: 2 }) ||
      !isValid(post.summary,{ min: 2 }) ||
      !isValid(post.text,{ min: 10 })

    ) {
      setActive({ ...active, change: false})
      return
    }
    const body = new FormData()
    body.append("post_id",post.post_id)
    body.append("category",post.category)
    body.append("summary",post.summary)
    body.append("text",post.text)
    post.img 
      ? body.append("img",post.img)
      : body.append("img_name", post.img_name)
    

    const statusText = await BlogApi.updatePost(body)

    if(statusText === "Created") {
      setActive({...active, change: false })
      setSnack({ ...snack, change: true })
      refreshData()
    }
    
  }

  const handleDelete = (id) => {
    setPost({...post, post_id: id})
    setActive({...active, delete: !active.delete})
  }

  const handleUpdate = (el) => {
    setActive({ ...active, change: !active.change})
    setPost({ ...post, 
      post_id: el.post_id, 
      category: el.category, 
      summary: el.summary, 
      text: el.text, 
      img_name: el.src_img
    })
  }

  const newPost = () => {
    dropStateForm()
    setActive({ ...active, newPost: !active.newPost})
  }

  const dropStateForm = () => {
    setPost({...post, summary: "", text: "", category: "", img: ""})
  }

  const handleCreatePost = async () => {
    const data = new FormData()
    data.append("category",post.category)
    data.append("summary", post.summary)
    data.append("text", post.text)
    data.append("img", post.img)
    

    try {
      await BlogApi.createPost(data)
    } catch(e) {
        setSnack({ ...snack, add: true })
      return 
    }
      
    dropStateForm()
    setActive({ ...active ,newPost: false})
    setSnack({ ...snack ,create: true })
    refreshData()
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
    <Container>
      <Snacks key={"snacks"} snack={snack} onSneck={setSnack}/>
      <h1 className="text-h1">Новый пост</h1>
      <InputLabel 
        state={post.category} 
        setState={(value: string) => setPost({ ...post, category: value })} 
        text="Category" id={"addc"} 
      />
      <InputLabel  
        setState={(value: string) => setPost({...post, summary: value})} 
        state={post.summary} 
        text="Summary" id={"adds"} 
      />
      <Label classNames={style.AreaLable} text="Text" id={"textarea-add"} />
      <TextArea  
        state={post.text} 
        setState={(value) => setPost({...post, text: value})} 
        id="addta"
      />
      <label className={`buttonSubmit ${style.file}`} >Файл<input
        onChange={(e) => setPost({ ...post, img: e.target.files[0]})} 
        type="file" style={{display: "none"}}
      /></label>
      <div className={style.newFormButtons}>
        <ButtonSubmit 
          className={style.buttonAddPost} 
          text="Закрыть" event={() => setActive({ ...active, newPost: !active.newPost})} 
        />    
        <ButtonSubmit 
          className={`${style.buttonAddPost} ${style.buttonAddPost_closeButton}`} 
          text="Добавить" event={() => handleCreatePost()} 
        />
      </div>
    </Container>
    )
  }

  return (
    <div>
      <Snacks key={"snacks"} snack={snack} onSneck={setSnack}/>
       {/* -------Modals------ */}
      <ModalDelete 
        data={post} 
        onActive={(value) => setActive({ ...active, delete: value })}
        handleDelete={_delete}
        active={active.delete} 
      />

      <ModalUpdate 
        handleUpdate={_update} 
        onActive={(value) => setActive({ ...active, change: value })} 
        onPost={setPost} 
        post={post} 
        active={active}
      />
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
