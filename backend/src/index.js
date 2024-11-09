import {app} from './app.js'
import connectDB from './db/index.js';
import dotenv from 'dotenv'


dotenv.config({
    path: './env'
});

connectDB()

app.listen(
    process.env.PORT || 8000 , () => console.log(`Backend running on port: ${process.env.PORT || 8000}`)
);