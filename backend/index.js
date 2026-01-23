import express,{json} from 'express'
import dotenv from 'dotenv'
import usr from './routes/usrRoute.js'

dotenv.config()

const app=express()

app.use(json())
app.use('/',usr)

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to ${process.env.PORT}`);
    
})