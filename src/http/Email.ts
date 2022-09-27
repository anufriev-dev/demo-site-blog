import { $host } from "."

class Email {
  async change(body) {
    const { statusText } = await  $host.post("/api/auth/change",body)
    return statusText
  }

}

export default new Email  