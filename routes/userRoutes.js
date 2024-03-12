const express = require('express')
const userRouter  = express.Router()
const passport = require('passport')
const register = require('../controllers/userController')


userRouter.post('/register',register)
userRouter.post("/login",passport.authenticate('local', {failureRedirect:'/test',successRedirect:'/profile'}))


module.exports= userRouter;
