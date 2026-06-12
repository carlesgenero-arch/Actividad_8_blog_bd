const getAll = (req, res) => {
   
}

const getById = (req, res) => {
   const {autorId} = req.params
   res.send (`Se recupera un unico autor: ${autorId}`)
}


const create = (req, res) => {
    const body = req.body
}


module.exports = { getAll, getById, create }
