import { NextApiRequest, NextApiResponse } from "next"
import { User } from "src/model"
import { isValid } from "src/utils"

const Change = async (req: NextApiRequest, res: NextApiResponse) => {

  if(req.method === "PUT") {
    try {
      const { name, email } = req.body

      if(!isValid(name,{min: 2, max: 20})) throw new Error()

      const result = await User.update_name(name, email)

      if(!result) throw new Error()

      res.status(200).json({ msg: "Name is update" })
    } catch(e) { 
      res.status(400).json({ msg: "Name isn't update" })
    }
  }
  
}

export default Change
