
const { getAll, create, getById, getAllByAutor } = require('../../controllers/posts.controller');

const router = require ('express').Router();


router.get ('/', getAllByAutor);
router.get ('/:id', getById)
router.post ('/', create)


module.exports= router

