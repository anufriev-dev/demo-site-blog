import axios from "axios"
import UserApi from "./UserApi"

const $host = axios.create({
  baseURL: process.env.URL_HERE
})


export { 
  $host,
  UserApi
}