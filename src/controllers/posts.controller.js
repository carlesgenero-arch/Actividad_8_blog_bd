const PostsModel = require ('../models/posts.model')

const getAllByAutor = async (req, res) => {
    try {
        const posts = await PostsModel.selectAllByAutor()
        res.json (posts)
    } catch (error) {
         res.status(500).json({message: 'Hay un error bonito'}) 
    }

}

const getById = async (req, res) => {
   try {
        const {id} = req.params
        const post = await PostsModel.selectById(id)
        res.json (post)
   } catch (error) {
        res.status(500).json ({message:' id del post no recibido'})
   }
}

const create = async (req, res) => {
    try {
        const result = await PostsModel.insert(req.body);
        const nuevoPost = await PostsModel.selectById (result.insertId)
        res.status(201).json(nuevoPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creando el post' })
    }
    
    
}

module.exports = { getAllByAutor, getById, create }
