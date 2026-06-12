const db = require ('../config/db');

const selectAll = async () => {
     const [result] = await db.query('SELECT * FROM posts');
    return result;
}
   
const selectByAutorId = async (autorId)=> {
    const [result] = await db.query ('SELECT * FROM posts WHERE Autores_id = ?', [autorId])
    return result
}   

const insert = async ()=>{

}

module.exports = {
    selectAll,
    selectByAutorId,
    insert
}