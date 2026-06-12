const { getAll, create } = require('../../controllers/autores.controller');
const router = require ('express').Router();

router.get ('/', getAll);
router.post ('/', create)


module.exports= router

