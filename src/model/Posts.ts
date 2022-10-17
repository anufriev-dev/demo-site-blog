import db from "config/db"
import { getCommentsParams, getPostJoinCommentsData, PostDB } from "src/types"
import { createDate } from "src/utils"

class Posts {
  async getComments(id: number): Promise<getCommentsParams[]> {
    try {
      const data = await db.query(`
          SELECT * FROM comment
          JOIN post_blog_comment
          ON comment.comment_id = post_blog_comment.comment_id
          WHERE post_id = $1
      `,[id])
      return data.rows
    } catch(e) { return e }
  }
  async getPost (id: number): Promise<PostDB> {
    try {
      const data = await db.query(`
          SELECT * FROM post_blog
          WHERE post_id = $1
        `,[id])
      return data.rows[0]
    } catch(e) { return e }
  }
  async getPostJoinComments(page: number, search: string): Promise<getPostJoinCommentsData> {
    try {
      const offset =  (10 * (page - 1))  || 0
      const data = await db.query(`
        SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
          COUNT(pbc.comment_id) AS comments,
          COUNT(*) OVER() AS counts
          FROM post_blog AS pb
          LEFT JOIN post_blog_comment AS pbc
        ON pb.post_id = pbc.post_id
        ${search && "WHERE pb.text ILIKE '%"+ search +"%'" + " OR pb.summary ILIKE '%"+ search +"%'"}
        GROUP BY pb.post_id
        ORDER BY pb.post_id DESC
        LIMIT 10 OFFSET $1
      `,[offset])

      const allPosts = data.rows[0]?.counts || 0  // посты не могут быть пустым массивом
      const maxPages = Math.ceil( allPosts / 10 ) || 1  // страниц не может быть 0


      return { data: data.rows , allPosts: +allPosts , maxPages: +maxPages }
    } catch(e) { return e }
  }

  async getPostJoinCommentsByCacegory(category, page, search) {
    const offset =  (10 * (page - 1))  || 0
    let data = await db.query(`
        SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.text,pb.src_img,
          COUNT(pbc.comment_id) AS comments,
          COUNT(*) OVER() AS counts
          FROM post_blog AS pb
          LEFT JOIN post_blog_comment AS pbc
        ON pb.post_id = pbc.post_id
        WHERE pb.category = $1
        ${search && "and  pb.text ILIKE '%"+ search +"%'" + " OR pb.summary ILIKE '%"+ search +"%'"}
        GROUP BY pb.post_id
        ORDER BY pb.post_id DESC
        LIMIT 10 OFFSET $2
      `,[category, offset])

      data = await JSON.parse(JSON.stringify(data.rows))

      const allPosts = data[0]?.counts || 0  // посты не могут быть пустым массивом
      const maxPages = Math.ceil( allPosts / 10 ) || 1  // страниц не может быть 0

    return { data: data , allPosts: +allPosts , maxPages: +maxPages }

  }

  async getLastComments (limit: number) {
    try {
      const result = await db.query(`
        SELECT pb.post_id,pb.summary,pb.category,pb.date,pb.src_img,
          COUNT(pbc.comment_id) AS comments
          FROM post_blog AS pb
          LEFT JOIN post_blog_comment AS pbc
        ON pb.post_id = pbc.post_id
        GROUP BY pb.post_id
        ORDER BY pb.post_id DESC
        LIMIT $1;
      `,[limit])
      return result.rows
    } catch(e) { return e }
  }

  async getPosts () {
    try {
      const result = await db.query(`
        SELECT * FROM "post_blog"
      `)
      return result.rows
    } catch(e) { return e }
  }

  async deletePostWithComments(id) {
    try {
      let result = await db.query(`
        DELETE FROM "post_blog_comment"
        WHERE post_id = $1;
      `,[id])
      result = await db.query(`
        DELETE FROM "post_blog"
        WHERE post_id = $1
      `,[id])

      return result.rowCount
    } catch(e) { return e }
  }

  async updatePost(post_id, category, summary, text, src_img) {
    try {
      const result = await db.query(`
        UPDATE "post_blog" SET
          category = $1,
          summary = $2,
          text = $3,
          src_img = $4
        WHERE post_id = $5;
      `,[category, summary, text, src_img, post_id])

      return result.rowCount
    } catch(e) { console.log(e)}
  }

  async create(category, summary, text, filename) {
    try {
      const date = createDate()

      const result = await db.query(`
        INSERT INTO "post_blog"
        (category,summary,text,src_img,date)
        VALUES ($1,$2,$3,$4,$5)
      `,[category, summary, text, filename, date])

      return result.rowCount
    } catch(e) { console.log(e) }
  }
}

export default new Posts
