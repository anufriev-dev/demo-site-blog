import { NextApiRequest, NextApiResponse } from "next" 

const Login = async (req: NextApiRequest, res: NextApiResponse) => {

  if(req.method === "POST") {
    try {
      const { email, passwd } = req.body

      // to-do - ловить E-mail и Passwd
      // проверить наличие в базе
      // если exist -> выдать пользователя

    }catch (e) {
      console.error(e)
    }
  }

}

export default Login