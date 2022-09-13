import { useBlog } from "../../hooks"
/* lib components
-------------------------------------------------- */
import { Container } from "@mui/system"
import Router from "next/router"
/* components     
-------------------------------------------------- */
import { ErrorComments, Warning, Post, Comment, FormData } from "../../../components"
/* styles
   -------------------------------------------------- */
import postStyles from "./styles/post.module.scss"
import commentStyles from "./styles/comment.module.scss"
import formDataStyles from "./styles/formData.module.scss"
import indexStyles from "./styles/index.module.scss"


export default function Blog(props) {
  const { data, post_id, comments, setComments } = props
  // state, setState
  const { 
    author, text, isErrorAuthor, isErrorText, errSubmit,
    setAuthor, setText, submit
  } = useBlog({post_id, comments, setComments})

  return (
    <div>
        {/* Пост */}
      <div>
        <Container>
          <Post styles={postStyles} item={data}/>
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
          <FormData 
            setAuthor={setAuthor}
            setText={setText}
            text={text}
            author={author}
            submit={submit}
            buttonTitle={"Отправить"}
            styles={formDataStyles}
            isErrorAuthor={isErrorAuthor}
            isErrorText={isErrorText}
          />
        </Container>
      </div>

      <button onClick={() => Router.back()}>Go back</button>
    </div>
  )
}
