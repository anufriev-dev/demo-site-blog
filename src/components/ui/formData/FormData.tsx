import style from "./style.module.scss"

export default function FormData(props) {
  const {
    isErrorAuthor, isErrorText, text,
    setAuthor, setText, submit, author, buttonTitle
  } = props

  return (
    <div>
      <form className={style.form} id="formAddComment">
      <div className={style.form__name__wrapp}>
        {
          isErrorAuthor &&
        <label className={style.form__errMessage } 
          htmlFor="pole1">Таких людей не бывает!</label>
        }
        <input
          id="pole1"
          onChange={(e) => setAuthor(e.target.value)}
          value={author} 
          type="text" placeholder="Укажите ваше имя"
          className={style.form__name}
        />
        </div>
        <br />
        {
          isErrorText &&
        <label 
          className={style.form__errMessage } 
          htmlFor="pole2">Сообщение не может быть маленьким, напиши что-то подлиннее</label>
        }
        <textarea
          id="pole2"
          onChange={(e) => setText(e.target.value)} 
          value={text}  
          placeholder="Напиши свой комментарий здесь" 
          className={style.form__textArea}
        />
        <button 
          onClick={(e) => submit(e)}
          className={style.form__button}
        >
          { buttonTitle }
        </button>
      </form>
    </div>
  )
}
