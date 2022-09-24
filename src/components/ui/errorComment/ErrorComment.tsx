import style from "./style.module.scss"

const ErrorComments = () => (
  <div>
    <p className={style?.errComment}>
      Комментарий не удалось отправить
    </p>
  </div>
)

export default ErrorComments