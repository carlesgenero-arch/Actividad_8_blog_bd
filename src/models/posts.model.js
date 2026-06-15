const db = require ('../config/db');

const selectAll = async () => {
     const [result] = await db.query('SELECT * FROM posts');
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
   
const selectByAutorId = async (autorId)=> {
    const [result] = await db.query ('SELECT * FROM posts WHERE Autores_id = ?', [autorId])
    return result
}   

const insert = async ({titulo, descripcion, categoria, creado_en, Autores_id})=>{
 const [result] = await db.query (`INSERT INTO posts (titulo, descripcion, categoria, creado_en, Autores_id )
    VALUES (?,?,?,?,?)`,
    [titulo, descripcion, categoria , creado_en, Autores_id])
    return result;
}

module.exports = {
    selectAll,
    selectByAutorId,
    selectById,
    insert
}