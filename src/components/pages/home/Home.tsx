import { Container, Grid } from "@mui/material"
import { CardBlog } from "src/components"
import { IHomePage } from "src/types"

function Home(props: IHomePage) {
  const { data } = props

  const card = data.map((it) => (
    <Grid key={it.post_id} xs={12} md={6} lg={4} item>
      <CardBlog {...it} />
    </Grid>
  ))

  return (
    <div>
      <Container>
        <h1 className="text-h1">Последнее с блога</h1>
        <Grid spacing={5} container >
          {card}
        </Grid>
      </Container>
      <br />
      <br />
    </div>
  )
}

export default Home
