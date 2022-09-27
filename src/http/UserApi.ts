import { $host } from "./index"


class UserApi {
  async delete() {
    const { statusText } = await $host.delete("/api/auth/delete")
    return statusText
  }
  async change(body) {
    const { statusText } = await  $host.put("/api/auth/change",body)
    return statusText
  }
}

export default new UserApi