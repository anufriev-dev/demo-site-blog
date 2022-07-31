import { $host } from "./index.js"

export const getPosts = async () => {
  const { data } = await $host.get("/api/blog/")
  return data
}

export const getAllComments = async (id) => {
  const { data } = await $host.get("/api/blog/getComments/" + id)
  return data
}

export const addComment = async (body) => {
  const { data } = await $host.post("/api/blog/getComments/",body)
  return data
}

export const getAmountComment = async () => {
  const { data } = await $host.get("/api/blog/getComments/")
  return data.comments
}