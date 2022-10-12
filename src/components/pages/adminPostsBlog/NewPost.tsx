import { Container } from "@mui/system";
import { Snacks } from "."
import { BlogApi } from "src/http";
import { useRefreshData } from "src/hooks";
import { InputLabel, TextArea, Label, ButtonSubmit } from "src/components"
import { useAdminPostsBlog, useAdminPostsBlogDispatch } from "src/context";

import style from "./style.module.scss"


export default function NewPost () {
  const { refreshData } = useRefreshData()
  
  const { post } = useAdminPostsBlog()
  const dispatch = useAdminPostsBlogDispatch()

  const handleCreatePost = async () => {
    const data = new FormData()
    data.append("category",post.category)
    data.append("summary", post.summary)
    data.append("text", post.text)
    data.append("img", post.img)
    

    try {
      await BlogApi.createPost(data)
    } catch(e) {
        dispatch({ type: "show_snack_on_add" })
      return
    }
    
    dispatch({ type: "drop_state_form" })
    dispatch({ type: "fetch_create_success" })
    refreshData()
  }

  return (
    <Container>
      <Snacks key={"snacks"} />
      <h1 className="text-h1">Новый пост</h1>
      <InputLabel 
        state={post.category} 
        setState={(value: string) => dispatch({ type: "post_category", category: value })}
        text="Category" id={"addc"} 
      />
      <InputLabel  
        setState={(value: string) => dispatch({ type: "post_summary", summary: value}) } 
        state={post.summary}
        text="Summary" id={"adds"}
      />
      <Label classNames={style.AreaLable} text="Text" id={"textarea-add"} />
      <TextArea  
        state={post.text} 
        setState={(value) => dispatch({ type: "post_text", text: value })} 
        id="addta"
      />
      <label className={`buttonSubmit ${style.file}`} >Файл<input
        onChange={(e) => dispatch({ type: "post_img", img: e.target.files[0]}) } 
        type="file" style={{display: "none"}}
      /></label>
      <div className={style.newFormButtons}>
        <ButtonSubmit 
          className={style.buttonAddPost} 
          text="Закрыть" event={() => dispatch({ type: "post_new_post"})} 
        />    
        <ButtonSubmit 
          className={`${style.buttonAddPost} ${style.buttonAddPost_closeButton}`} 
          text="Добавить" event={() => handleCreatePost()} 
        />
      </div>
    </Container>
  )
}
