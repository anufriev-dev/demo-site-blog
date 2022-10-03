import { $host } from "./index"


class UserApi {
  async delete(id = null) {
    const { statusText } = await $host.delete("/api/auth/delete",{data: { id: id }})
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
  async updateUser(body) {
    const { statusText } = await $host.put("/api/auth/change/user", body)
    return statusText
  }
}

export default new UserApi
