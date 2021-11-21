import express, {Application, Request, Response} from 'express';
import mongoose from 'mongoose'
import config from './config/config';
import  cors from 'cors'
import authRouter from './routes/auth';
import userRouter from './routes/user';
import bodyParser from 'body-parser';


mongoose.connect(config.mongo.url,config.mongo.options)
.then((res) => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log(`${err}`)
})


const app: Application = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/auth',authRouter)
app.use('/user',userRouter)


app.get('/', (req : Request,res: Response) => {
    res.send('Hello World');
})

app.listen(config.server.port, () => {
    console.log(`Coneection sucessfully on port ${config.server.port}`)
})