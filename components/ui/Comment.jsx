import convertDate from "../../utils/convertDate"


export default function Comment({ comment }) {

  const thisDate = convertDate(comment.date)

  if(!thisDate) return <h1>Loading</h1> 

  return (
  <div>
    <div>{ comment.comment_id }</div>
    <div>{ comment.text }</div>
    <div>{ comment.author }</div>
    <time>{ thisDate }</time>
  </div>
    
  )
}