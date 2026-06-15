const db = require ('../config/db');

const selectAll = async () => {
     const [result] = await db.query('SELECT * FROM autores');
    return result;
}

const selectById = async (autorId) =>{
    const [result] = await db.query (
        'SELECT * FROM autores where id = ?',
        [autorId]
    );
    if (result.length === 0) return null
    return result [0];
}

const insert = async ({nombre, email, imagen_url})=>{

    const [result] = await db.query (`INSERT INTO autores (nombre, email, imagen_url)VALUES
        (?,?,?)`,
        [nombre, email, imagen_url])
        return result;
}

module.exports = { selectAll, selectById, insert}