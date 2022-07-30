import db from "../../config/db"


export default async function getUser (req,res) {

  const METHOD = req.method

  if( METHOD === "GET") {
    const result = await db.query("SELECT * FROM post_blog")
  
    return res.status(200).json(result.rows)
  }

  if( METHOD === "POST") {

  }

}