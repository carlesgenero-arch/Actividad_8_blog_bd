const { getAll, create } = require('../../controllers/posts.controller');

const router = require ('express').Router();


router.get ('/', getAll);
router.post ('/', create)


module.exports= router

