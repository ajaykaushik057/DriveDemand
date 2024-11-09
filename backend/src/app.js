import express from 'express'
import cors from  'cors'

const app = express();

app.use(cors({
    origin:"*",
    credentials: true,
    optionsSuccessStatus:200
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('Hello World!');
})


// =============== Routes =============================
import userRouter from "./routes/user.routes.js"
import carRouter from './routes/car.routes.js';


app.use("/api/v1/users",userRouter)
app.use("/api/v2/cars",carRouter)


export {app}