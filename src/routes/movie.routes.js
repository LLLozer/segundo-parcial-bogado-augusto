import { Router } from "express";
const routerMovie = Router()
import { create, findByID, getAllMovies, updateData } from "../controllers/movie.controllers.js"

routerMovie.post("/api/movies", create)
routerMovie.get("/api/movies", getAllMovies)
routerMovie.get("/api/movies/:id", findByID)
routerMovie.put("/api/movies/:id", updateData)
export default routerMovie