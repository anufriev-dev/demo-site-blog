import { usePost } from "src/hooks"
import { Container } from "@mui/system"
import { ErrorComments, Warning, PostItem, Comment, FormData } from "src/components"
import { PostPageProps } from "src/types"
import style from "./style.module.scss"


export default function Post(props: PostPageProps) {
  // state, setState
  const {
    errSubmit, comments, formProps
  } = usePost(props.comments)

  return (
    <div>
        {/* Пост */}
      <div>
        <Container>
          <PostItem item={props.data}/>
        </Container>
      </div>
        {/* Комментарии */}
      <div>
        <Container>
          <h2 className={style.titleh2}>Комментарии</h2>
          {/* Отобразить */}
          {comments.length
            ? comments.map((comment,index) => (
                <Comment key={index} comment={comment} />
            ))
            : <Warning />
              }

          {/* Ошибка отправки */}
          { errSubmit && <ErrorComments /> }
        </Container>
      </div>
        {/* Форма */}
      <div>
        <Container>
          <h2 className={style.titleh2}>Добавить комментарий</h2>
          <FormData {...formProps} />
        </Container>
      </div>

      {/* <button onClick={() => Router.back()}>Go back</button> */}
    </div>
  )
}
