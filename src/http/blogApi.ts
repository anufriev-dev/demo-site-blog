import { addCommentBody } from "src/types"
import { $host } from "./index"



export const addComment = async (body: addCommentBody ) => {
  try{
    const { statusText } = await $host.post("/api/blog/getComments/",body)
    return statusText
  }catch(e) {
    alert("Упс, комментарий не отправился :(")
    /* eslint-disable-next-line no-console */
    console.error(new Error(e.response.data))
  }
}
