const db = require ('../config/db');

const selectAllByAutor = async () => {
     const [result] = await db.query(`
        SELECT
        posts.idPosts, 
        posts.titulo,
        autores.id,
        autores.nombre AS autor,
        autores.email,
        autores.imagen_url
        FROM
        posts
        INNER JOIN autores ON posts.Autores_id = autores.id
        ORDER BY posts.idPosts ASC`);
    return result;
}

const selectById = async (postId)=>{
    const [result] = await db.query (
        'SELECT * FROM posts where idPosts =?',
        [postId]
    );
    if (result.length === 0) return null
    return result [0];
}
   

const insert = async ({titulo, descripcion, categoria, creado_en, Autores_id})=>{
 const [result] = await db.query (`INSERT INTO posts (titulo, descripcion, categoria, creado_en, Autores_id )
    VALUES (?,?,?,?,?)`,
    [titulo, descripcion, categoria , creado_en, Autores_id])
    return result;
}

module.exports = {
    selectAllByAutor,
    selectById,
    insert
}