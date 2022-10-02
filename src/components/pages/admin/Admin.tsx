import { Container } from "@mui/system"
import { Row } from "src/components"
import { useAdmin } from "src/hooks"
import { IAdminProps } from "src/types"
import { themeAccount, nameCategoryAdminPanel as data } from "config/filling_data"


function Admin(props: IAdminProps ) {
  const { fitlerSearch } = useAdmin(props, data)

  return (
    <Container>
      <div>
        <ul>
          { fitlerSearch.length 
            ? fitlerSearch.map((el,i) => (
              <div key={i}>
                <Row
                  title={el.name}
                  bg={themeAccount.bg_first} color={themeAccount.color}
                  href={el.link} textLink="Перейти"
                />
              </div>
            ))
            : <div>Не найдено</div>
          }
        </ul>
      </div>
    </Container>
  )
}

export default Admin
