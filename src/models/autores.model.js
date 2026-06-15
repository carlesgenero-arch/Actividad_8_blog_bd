const db = require ('../config/db');

const selectById = async (autorId) =>{
    const [result] = await db.query (
        `SELECT
            id AS autorId,
            nombre AS autor,
            email, 
            imagen_url AS imagen
         FROM autores
         WHERE id = ?`,
        [autorId]
    );
    if (result.length === 0) return null
    return result [0];
}

const selectByPosts =async (autorId)=>{
    const [result]= await db.query(
        `SELECT
            posts.idPosts AS postId,
            posts.titulo AS titulo
         FROM posts
         WHERE posts.Autores_id =?
         ORDER BY postId ASC`,
        [autorId]
    )
     return result;
}

const insert = async ({nombre, email, imagen_url})=>{

    const [result] = await db.query (`INSERT INTO autores (nombre, email, imagen_url)VALUES
        (?,?,?)`,
        [nombre, email, imagen_url])
        return result;
}

module.exports = { selectById, selectByPosts, insert}