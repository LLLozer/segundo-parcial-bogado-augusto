import { Router } from "express";
const routerMovie = Router()
import { create, deleteData, findByID, getAllMovies, updateData } from "../controllers/movie.controllers.js"

routerMovie.post("/movies", create)
routerMovie.get("/movies", getAllMovies)
routerMovie.get("/movies/:id", findByID)
routerMovie.put("/movies/:id", updateData)
routerMovie.delete("/movies/:id", deleteData)
export default routerMovie