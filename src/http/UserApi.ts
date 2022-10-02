import { $host } from "./index"


class UserApi {
  async delete() {
    const { statusText } = await $host.delete("/api/auth/delete")
    return statusText
  }
  async changePasswd(body) {
    const { statusText } = await  $host.put("/api/auth/change",body)
    return statusText
  }
  async changeName(body) {
    const { statusText } = await  $host.put("/api/auth/change/name",body)
    return statusText
  }
}

export default new UserApi
