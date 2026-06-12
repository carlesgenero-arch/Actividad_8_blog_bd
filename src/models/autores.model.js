const db = require ('../config/db');

const selectAll = async () => {
     const [result] = await db.query('SELECT * FROM autores');
    return result;
}
   

const insert = async ()=>{

}

module.exports = { selectAll, insert}