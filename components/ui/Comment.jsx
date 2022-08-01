import convertDate from "../../utils/convertDate"


export default function Comment({ comment, styles }) {

  const thisDate = convertDate(comment.date)

  if(!thisDate) return <h1>Loading</h1> 
  
  return (

  <div className={styles.comment}>
    <div className={styles.comment__author}>{ comment.author }</div>
    <div className={styles.comment__date}>{ thisDate }</div>
    <div className={styles.comment__text}>{ comment.text }</div>
    <hr />
  </div>

  )
}