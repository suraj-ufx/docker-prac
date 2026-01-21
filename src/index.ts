import express, { type Request, type Response } from 'express'

const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send("running dockerize service")
})

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';


app.listen(3000, "0.0.0.0", () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
})