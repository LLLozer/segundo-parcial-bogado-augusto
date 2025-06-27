const express = require("express")
const app = express()
const PORT = 3004

app.get("/", (req , res) => {
    res.send("Test")
})

app.listen(PORT, () => {
    console.log(`Servidor encendido en http://localhost:${PORT}`)
})