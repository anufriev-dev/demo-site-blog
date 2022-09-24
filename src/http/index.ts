import axios from "axios"
import UserApi from "./UserApi"
import BlogApi from "./BlogApi"

const $host = axios.create({
  baseURL: process.env.URL_HERE
})


export { 
  $host,
  UserApi,
  BlogApi
}