import { Modal, ButtonSubmit, InputLabel, Label, TextArea, ButtonFile } from "src/components"
import { useAdminPostsBlog, useAdminPostsBlogDispatch } from "src/context"
import { useRefreshData } from "src/hooks"
import { BlogApi } from "src/http"
import { isValid } from "src/utils"

import style from "./style.module.scss"


export default function ModalUpdate() {
  const { refreshData } = useRefreshData()

  const { active, post } = useAdminPostsBlog()
  const dispatch = useAdminPostsBlogDispatch()

  const _update = async () => {
    if(
      !isValid(post.category,{ min: 2 }) ||
      !isValid(post.summary,{ min: 2 }) ||
      !isValid(post.text,{ min: 10 })

    ) {
      dispatch({ type: "close_modal_change" })
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
      dispatch({ type: "fetch_update_success" })
      refreshData()
    }
    
  } 

  function handleModalChange(value) {
    dispatch({ type: "modal_change", change: value }) 
  }
  function handleModalClose() {
    dispatch({ type: "modal_change_close" })
  }

  return (
    <Modal active={active.change} onActive={handleModalChange} >
      <p className="text">Изменить пост c id = &#34;{post.post_id}&#34;?</p>
      <ButtonFile change={(value) => dispatch({ type: "post_img", img: value }) } />
      <InputLabel 
        state={post.category} 
        setState={(value) => dispatch({ type: "post_category", category: value }) }   
        id={"catg"} 
        text="category"
      />
      <InputLabel 
        state={post.summary} 
        setState={(value) => dispatch({ type: "post_summary", summary: value}) } 
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
        setState={(value) => dispatch({ type: "post_text", text: value }) }
      />
      <div className={style.modal__delete_buttons}>
        <ButtonSubmit event={handleModalClose} text="Отмена" /> 
        <ButtonSubmit event={_update} text="Изменить" />
      </div>
    </Modal>
  )
}
