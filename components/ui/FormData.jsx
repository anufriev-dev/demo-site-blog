

export default function FormData(prpps) {
  return (
    <div style={{padding:"50px"}}>
    <h2>Добавить комментарий</h2>

    <form id="formAddComment" action="">
      <input onChange={(e) =>prpps.setAuthor(e.target.value)} value={prpps.author} type="text" placeholder="Укажите ваше имя" />
      <input onChange={(e) =>prpps.setText(e.target.value)} value={prpps.text} type="text" placeholder="Напишите свой комментарий здесь" />

      <button onClick={(e) => prpps.submit(e)}>{prpps.buttonTitle}</button>
    </form>
  </div>
  )
}
