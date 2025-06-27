import express from "express"
import routerMovie from "./src/routes/movie.routes.js"
import { DBStart } from "./src/config/database.js"
const app = express()
const PORT = 3004
app.use(express.json())
app.use("/api", routerMovie)

app.get("/", (req , res) => {
    res.send("Test")
})

app.listen(PORT, () => {
    DBStart()
    console.log(`Servidor encendido en http://localhost:${PORT}`)
})