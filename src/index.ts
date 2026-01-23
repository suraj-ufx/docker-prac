import express, { type Request, type Response } from 'express'
import { config } from 'dotenv'

const app = express()
config()

let counter_server_one = 0;
app.get("/", (req:Request, res:Response) => {
  res.send(`Hello from ${process.env.HOSTNAME}\n`);
});

const PORT = process.env.PORT;
const HOST = process.env.HOST

app.listen(3000, "0.0.0.0", () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
})