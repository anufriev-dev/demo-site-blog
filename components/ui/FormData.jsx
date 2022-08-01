

export default function FormData(props) {
  return (
    <div>
    <h2>Добавить комментарий</h2>

    <form id="formAddComment" action="">
      <input onChange={(e) => props.setAuthor(e.target.value)} value={props.author} type="text" placeholder="Укажите ваше имя" />
      <br />
      <textarea
        onChange={(e) => props.setText(e.target.value)} 
        value={props.text}  
        placeholder="Напишите свой комментарий здесь" 
        className={props.styles.textArea}
        />

      <button onClick={(e) => props.submit(e)}>{props.buttonTitle}</button>
    </form>
  </div>
  )
}
