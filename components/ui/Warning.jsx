

export default function Warning({ styles }) {

  return (
    <div>
      <p className={styles.emptyCommentP}>
        Паника, что-то случилось!!! Ничего не найдено в комментариях. 
        Срочно нужно что-то добавить, чтобы это место не оставалось пустым.</p>
      <hr />
  </div>
  )
}