
const { getAll, create, getById } = require('../../controllers/posts.controller');

const router = require ('express').Router();


router.get ('/', getAll);
router.get ('/:postId', getById)
router.post ('/', create)


module.exports= router

