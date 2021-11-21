import express from 'express';
import controller from '../controllers/user'

const userRouter = express.Router();

userRouter.get('/getAllUser', controller.getUser)

export = userRouter
