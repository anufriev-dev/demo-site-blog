import { useBlog } from "../../hooks"
/* lib components
-------------------------------------------------- */
import { Container } from "@mui/system"
import Router,{ useRouter } from "next/router"
/* components     
-------------------------------------------------- */
import { ErrorComments, Warning, Post, Comment, FormData } from "components"
/* styles
   -------------------------------------------------- */
import postStyles from "./styles/post.module.scss"
import commentStyles from "./styles/comment.module.scss"
import formDataStyles from "./styles/formData.module.scss"
import indexStyles from "./styles/index.module.scss"

import { blogPageProps } from "pages/blog/[id]/[blog]"


export default function Blog(props: blogPageProps) {
  const router = useRouter()

  
  const { id: post_id } = router.query
  
  // state, setState
  const { 
    author, text, isErrorAuthor, isErrorText, errSubmit,
    setAuthor, setText, submit, comments
  } = useBlog(post_id, props.comments)
  
  const formProps = {
    setAuthor, author, setText, text, styles: formDataStyles,
    submit, buttonTitle: "Отправить",isErrorAuthor ,isErrorText,
  }
  return (
    <div>
        {/* Пост */}
      <div>
        <Container>
          <Post styles={postStyles} item={props.data}/>
        </Container>
      </div>

        {/* Комментарии */}
      <div>
          <Container>
            <h2 className={indexStyles.titleh2}>Комментарии</h2>
            {/* Отобразить */}
            { 
              comments.length
                ? comments.map((comment,index) => (
                  <Comment styles={commentStyles} key={index} comment={comment} />
                ))
                : <Warning styles={indexStyles} />
            }
            
            {/* Ошибка отправки */}
            { errSubmit && <ErrorComments styles={indexStyles} /> }
          </Container>
      </div>
  
        {/* Форма */}
      <div>
        <Container>
          <h2 className={indexStyles.titleh2}>Добавить комментарий</h2>
          <FormData {...formProps} />
        </Container>
      </div>

      <button onClick={() => Router.back()}>Go back</button>
    </div>
  )
}
