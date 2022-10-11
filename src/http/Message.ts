import { $host } from "."

class Message {

  async add(body) {
    const { data } = await $host.post("/api/message", body)
    return data
  }

  async delete(id) {
    const { data } = await $host.delete("/api/message", { data: { id }})
    return data
  }
}

export default new Message
