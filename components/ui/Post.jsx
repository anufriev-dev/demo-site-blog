

export default function Post({ item }) {
  return (
    <div>
        <h1>{item.summary}</h1>
        <div>
          <time>{item.date}</time>
          <div>{item.category}</div>
          <img src={`${item.src_img}`} alt="" height={300} />
          <p>{item.text}</p>
          
        </div>
    </div>
  )
}