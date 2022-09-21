export default function FormData(props) {
  const {
    styles,
    isErrorAuthor,
    isErrorText,
    setAuthor,
    setText,
    submit,
    text,
    author,
    buttonTitle,
  } = props

  return (
    <div>
      <form className={styles.form} id="formAddComment">
      <div className={styles.form__name__wrapp}>
        {
          isErrorAuthor &&
        <label className={styles.form__errMessage } 
          htmlFor="pole1">Таких людей не бывает!</label>
        }
        <input
          id="pole1"
          onChange={(e) => setAuthor(e.target.value)}
          value={author} 
          type="text" placeholder="Укажите ваше имя"
          className={styles.form__name}
        />
        </div>
        <br />
        {
          isErrorText &&
        <label 
          className={styles.form__errMessage } 
          htmlFor="pole2">Сообщение не может быть маленьким, напиши что-то подлиннее</label>
        }
        <textarea
          id="pole2"
          onChange={(e) => setText(e.target.value)} 
          value={text}  
          placeholder="Напиши свой комментарий здесь" 
          className={styles.form__textArea}
        />
        <button 
          onClick={(e) => submit(e)}
          className={styles.form__button}
        >
          { buttonTitle }
        </button>
      </form>
    </div>
  )
}
