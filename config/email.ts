import nodemailer from "nodemailer"
import { env } from "process"

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env["EMAIL_NODEMAILER"],
    pass: env["PASS_NODEMAILER"]
  }
})

export default transport