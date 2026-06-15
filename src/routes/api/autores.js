const { getAll, create, getById, getAutorByPost } = require('../../controllers/autores.controller');
const router = require ('express').Router();

router.get ('/:autorId',getById);
router.get ('/:autorId/posts',getAutorByPost);
router.post ('/', create)


module.exports= router

