import express, { type Request, type Response } from 'express'

const app = express()

app.get("/",(req:Request,res:Response) =>{
    res.send("running dockerize service")
})

const PORT = 3000;
app.listen(()=>console.log(`Server is running on ${PORT}`))