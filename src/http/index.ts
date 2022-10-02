import axios from "axios"
import UserApi from "./UserApi"
import BlogApi from "./BlogApi"
import Email from "./Email"

const $host = axios.create({
  baseURL: process.env.URL_HERE
})


export {
  $host,
  UserApi,
  BlogApi,
  Email
}
