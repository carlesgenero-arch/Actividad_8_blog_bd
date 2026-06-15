const AutorModel = require ('../models/autores.model')

const getById = async (req, res) => {
    try {
        const {autorId} = req.params
        const autor = await AutorModel.selectById(autorId);
        res.json(autor)
    } catch (error) {
        res.status(500).json ({message:' id del autor no recibido'})
    }   
}

const getAutorByPost = async (req, res) =>{
    try {
        //Recupero autor
        const {autorId}= req.params;
        const autor = await AutorModel.selectById(autorId);
        if(!autor){
            return res.status (404).json ({message: 'Autor no encontrado'});
        }
        //Recupero posts del autor
        const posts = await AutorModel.selectByPosts(autorId);

        //Agrupar objeto
        const autorPosts ={
            ...autor,
            posts:posts
        };
        res.json (autorPosts)
    } catch (error) {
        res.status(500).json ({message:'posts y autor no recibidos'})
    }
}

const create = async (req, res) => {
    try {
        const result = await AutorModel.insert (req.body)
        const nuevoCliente = await AutorModel.selectById (result.insertId)
        res.status(201).json(nuevoCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando el autor' })
    }
}

module.exports = { getById, getAutorByPost, create }
