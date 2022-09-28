import { Layout, Post } from "src/components"
import { Posts, User } from "src/model"
import { GetServerSideProps } from "next"
import { IUser, PostPageProps } from "src/types"
import { getToken } from "next-auth/jwt"


export default function PostPage(props: PostPageProps & IUser ) {
  if(!props) return null
  
  return (
    <Layout user={props.user}>
      <Post {...props} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, req } = context

  const comments = await Posts.getComments(+query.id)
  const post = await Posts.getPost(+query.id)

  const props = { data: post, comments }
  const token = await getToken({ req })

  if(!token) return { props }

  const user = await User.get_by_email(token.email)
  
  
  return { props: {
      ...props, 
        user: {
          name: user.name
        }
    }
  }
}