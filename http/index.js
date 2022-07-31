import axios from "axios"

const $host = axios.create({
  baseURL: process.env.URL_HERE
})


export {
  $host
}