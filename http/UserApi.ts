import { $host } from "./index"


class UserApi {
  async delete() {
    const { statusText } = await $host.delete("/api/auth/delete")
    return statusText
  }
}

export default new UserApi