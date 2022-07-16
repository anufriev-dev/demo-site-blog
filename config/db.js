import { Pool } from "pg"

export default new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWD
})