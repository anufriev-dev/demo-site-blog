import { addCommentBody } from "src/types"
import { $host } from "./index"

class BlogApi {
  async addComment(body: addCommentBody ){
    const { statusText } = await $host.post("/api/blog/getComments/",body)
    return statusText
  }

  async deleteComment(id) {
    try {
      const { statusText } = await $host.delete("/api/blog/deleteComment",{ data: { id } })
      return statusText
    } catch(e) { console.log(e.message) }

  }

  async deletePost(id: string | number ) {
    const { statusText } = await $host.delete("/api/blog/post/delete",{ data: { id } })
    return statusText
  }

  async updatePost(body) {
    const { statusText } = await $host.put("/api/blog/post/update",body, {
        headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return statusText
  }

  async createPost(body) {
    const { status } = await $host.post("/api/blog/post/create", body, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    } )
    return status
  }
}

export default new BlogApi
