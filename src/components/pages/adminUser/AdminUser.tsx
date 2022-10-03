import { Container } from "@mui/material"
import { IAdminUser } from "src/types"
import { defineRole } from "src/utils"


function AdminUser(props: IAdminUser) {
  const { state, users, setState } = props

  return (
    <div>
      <Container>
        <h1 className="text-h1">Пользователи</h1>
        <table>
          <tbody>
            <tr>
              <th>Header</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{defineRole(user.role)}</td>
                <td>{user.date_registration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  )
}

export default AdminUser
