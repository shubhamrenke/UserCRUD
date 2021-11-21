import express from 'express';
import controller from '../controllers/auth'
import extractJWT from '../middleware/extractJWT';

const authRouter = express.Router();

authRouter.get('/validate',extractJWT, controller.validateToken)
authRouter.post('/register', controller.register)
authRouter.post('/login', controller.login)

export = authRouter