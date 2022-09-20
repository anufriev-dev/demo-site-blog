import { $host } from "./index.js"

class UserApi {
  async delete() {
    const { data } = await $host.delete("/api/auth/delete")
    return data
  }
}

export default new UserApi