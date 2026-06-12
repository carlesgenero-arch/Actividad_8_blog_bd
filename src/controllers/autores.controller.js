const AutorModel = require ('../models/autores.model')

const getAll = async (req, res) => {
    try {
        const autores = await AutorModel.selectAll()
        res.json (autores)
    } catch (error) {
            res.status(500).json({message: 'Hay un error guapo'}) 
    }  
}

const getById = (req, res) => {

}


const create = async (req, res) => {
    try {
        const result = await AutorModel.insert (req.body)
        const nuevoCliente = await AutorModel.selectById (result.insertId)
        if(!nuevoCliente){
        return res.status(404).json ({message: 'No existe el cliente con ese Id'});
        }
        res.status(201).json(nuevoCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando el autor' })
    }
    
}


module.exports = { getAll, getById, create }
