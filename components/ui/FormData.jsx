

export default function FormData(props) {


  return (
    <div>
      <form className={props.styles.form} id="formAddComment">
      <div className={props.styles.form__name__wrapp}>
        {
          props.isErrorAuthor &&
        <label className={props.styles.form__errMessage } 
          htmlFor="pole1">Таких людей не бывает!</label>
        }
        <input
          id="pole1"
          onChange={(e) => props.setAuthor(e.target.value)}
          value={props.author} 
          type="text" placeholder="Укажите ваше имя"
          className={props.styles.form__name}
        />
        </div>
        <br />
        {
          props.isErrorText &&
        <label 
          className={props.styles.form__errMessage } 
          htmlFor="pole2">Сообщение не может быть маленьким, напиши что-то подлиннее</label>
        }
        <textarea
          id="pole2"
          onChange={(e) => props.setText(e.target.value)} 
          value={props.text}  
          placeholder="Напиши свой комментарий здесь" 
          className={props.styles.form__textArea}
        />
        <button 
          onClick={(e) => props.submit(e)}
          className={props.styles.form__button}
        >
          { props.buttonTitle }
        </button>
      </form>
    </div>
  )
}
