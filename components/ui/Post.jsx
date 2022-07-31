import Image from "next/dist/client/image"

export default function Post({ item }) {
  return (
    <div>
        <h1>{item.summary}</h1>
        <div>
          <time>{item.date}</time>
          <div>{item.category}</div>
          <Image src={`${item.src_img}`} alt="" width={300} height={300} />
          <p>{item.text}</p>
          
        </div>
    </div>
  )
}