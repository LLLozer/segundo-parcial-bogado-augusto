import Movie from "../models/movie.model.js";
import { Router } from "express";

export const create = async (req , res) => {
    const { title } = req.body;
    try {
        const createMovTitleVal = await Movie.findOne({ where: { title: title } })
            if (createMovTitleVal) {
                console.log(createMovTitleVal)
                return res.status(400).json({
                message:"Error: Esa película ya está registrada."
            })
            }
        const createMov = await Movie.create(req.body)
        res.status(200).json(createMov)
    } catch (error) {
    res.status(500).json({ error: error.message})
    }
}

export const getAllMovies = async (req , res) => {
        const moviesFindAll = await Movie.findAll() 
        res.json(moviesFindAll)
}

export const findByID = async (req , res) => {
    const id = parseInt(req.params.id)
    try {
        const findID = await Movie.findByPk(id)
        if (!findID) {
            res.status(404).json({
                message:"Error: Ese ID no existe",
                error: "Not Found",
                statusCode: "404"
            })
        }
    res.json(findID)
    } catch (error) {
        res.status(404).json({
            message:"Error: No se encontró la película",
            error: "Not Found",
            statusCode: "404"
        }) 
    }
}

export const updateData = async (req , res) => {
    const id = parseInt(req.params.id)
    const { title, director, duration, gender } = req.body
    if (isNaN(id)) {
        res.status(400).json({
            message:"Error: El ID debe ser un número",
            error:"Bad Request",
            statusCode:"400"
        })
    }
    if (!title && !director && !duration && !gender) {
        res.status(400).json({
            message:"Error: Hay campos vacíos",
            error:"Bad Request",
            statusCode:"400"
        })
    }
    try {
        const findID = await Movie.findByPk(id)
        if (!findID) {
            res.status(404).json({
                message:"Error: Ese ID no existe",
                error: "Not Found",
                statusCode: "404"
            })
        }
    await findID.update({ title, director, duration, gender})
    res.json("Se actualizaron los datos")
    } catch (error) {
        res.status(404).json({
            message:"Error al encontrar la película",
            error:"Not Found",
            statusCode:"404"
        }) 
    }
}

export const deleteData = async (req , res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        res.status(400).json({
            message:"Error: El ID debe ser un número",
            error:"Bad Request",
            statusCode:"400"
        })
    }
    try {
        const findID = await Movie.findByPk(id)
        if (!findID) {
            res.status(404).json({
                message:"Error: Ese ID no existe",
                error: "Not Found",
                statusCode: "404"
            })
        }
    await findID.destroy()
        res.json("Se eliminaron los datos")
    } catch (error) {
        res.status(404).json({
            message:"Error al encontrar la película",
            error:"Not Found",
            statusCode:"404"
        }) 
    }
}