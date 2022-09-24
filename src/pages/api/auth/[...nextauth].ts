import NextAuth,{ NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials"
import { User } from "../../../model"
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id:"Authorization",
      name: "Authorization name",
      credentials: {},
      async authorize(credentials,req) {
        const { email, pass } = credentials as { email: string, pass: string }

        if(!email || !pass) throw new Error("not valid params")

        const user = await User.get_by_email(email)

        if(!user) throw new Error("user not exist")

        // check hash
        const access = await bcrypt.compare(pass,user.passwd)
        if(!access) throw new Error("passwd not valid")
          
        return { 
          id_db: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          date_registration: user.date_registration
        }
      }
    }),
    CredentialsProvider({
      id: "Registration",
      name: "Registration name",
      credentials: {},
      async authorize(credentials,req) {
        const { email, pass, name } = credentials as { email: string, pass: string, name: string }
        if(!email || !pass || !name) throw new Error()

        const exist = await User.exist(email)

        if(exist) throw new Error("user exist")
        // password hashing 
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(pass,salt)

        const created = await User.create(email,name,"USER",hash)

        if(created !== "INSERT") throw new Error("user not created")

        const user = await User.get_by_email(email)
          
        return { 
          id_db: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          date_registration: user.date_registration
        }
      }
    })
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {

      const name = user.name
      const email = user.email
      const isUser = await User.exist(email)

      const provider = account.provider

      if(
        provider === "Authorization" ||
        provider === "Registration"
      ) {
        return true
      }
      if(
        provider === "github" ||
        provider === "google"
      ) {
        if(!isUser) {
          const result = await User.create(email,name,"USER")
          if(result === "INSERT") {
            return true
          }
          return false
        }else return true
      }
    },
    async jwt({token,user,account}) {
      
      if(account) {
        const provider = account.provider
        if(provider === "github" || 
           provider === "google" 
        ) {
          const user_db = await User.get_by_email(user.email)
          
          token.date_registration = user_db.date_registration
          token.id_db = user_db.id
          token.role = user_db.role
        }
        if(
          provider === "Authorization" ||
          provider === "Registration"
        ) {
          token.date_registration = user.date_registration
          token.id_db = user.id_db
          token.role = user.role
        }
      }
      return token
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 15 * 24 * 60 * 60, // 15 дней
  },
  pages: {
    signIn: "/login"
  }
}
export default NextAuth(authOptions)