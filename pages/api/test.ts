import type { NextApiRequest,NextApiResponse } from "../../node_modules/next/dist/shared/lib/utils"

export default function test (req: NextApiRequest, res: NextApiResponse) {
  const METHOD = req.method
  if(METHOD === "GET") {
    res.status(200).json({ name: "John Doe" })
  }
  if(METHOD === "POST") {
    res.json(req.body)
  }
}