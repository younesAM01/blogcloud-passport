const express = require('express')
const postRouter  = express.Router()
const isAuthenticated = require('../middlewares/middleware');

const {deletePost,getPost,updatpost, creatpost} = require('../controllers/postController')

postRouter.get('/',isAuthenticated, getPost)
postRouter.post('/postadd',isAuthenticated,creatpost)
postRouter.put('/:title',isAuthenticated,updatpost)
postRouter.delete('/:title',isAuthenticated, deletePost)





module.exports= postRouter;
