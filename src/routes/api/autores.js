const { getAll, create, getById } = require('../../controllers/autores.controller');
const router = require ('express').Router();

router.get ('/', getAll);
router.get ('/:autorid',getById)
router.post ('/', create)


module.exports= router

