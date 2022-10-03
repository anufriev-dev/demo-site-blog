import { Container } from "@mui/system"
import { IAdminComments } from "src/types"

function AdminComments(props: IAdminComments ) {
  const {comments, setState, state} = props


  return (
    <div>
      <Container>
        <h1>Комментарии</h1>
        <table>
          <tbody>
            <tr> <th>Header</th></tr>
            {!!comments &&
              comments.map((el) => (
              <tr key={el.comment_id}>
                <td>{el.comment_id}</td>
                <td>{el.author}</td>
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

export default AdminComments
