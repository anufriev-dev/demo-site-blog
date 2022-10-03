import { Container } from "@mui/system"
import { useState } from "react"
import { IAdminPostsBlog } from "src/types"


function AdminPostsBlog(props: IAdminPostsBlog) {
  const { posts, setState, state } = props
  const [data, setData] = useState(posts)

  return (
    <div>
      <Container>
        <h1>посты Блога</h1>
        <table>
          <tbody>
            <tr>
              <th>Header</th>
            </tr>
          {
          !!data.length &&
          data.map((el) => (
            <tr key={el.post_id}>
              <td>{el.post_id}</td>
              <td>{el.category}</td>
              <td>{el.summary}</td>
              <td>{el.text}</td>
              <td>{el.date}</td>
            </tr>
          ))
        }
          </tbody>
        </table>

      </Container>
    </div>
  )
}

export default AdminPostsBlog
