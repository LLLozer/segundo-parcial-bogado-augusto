import DataTypes from "sequelize"
import {sequelize} from "../config/database.js"
const Movie = sequelize.define("Movie", {
    id: { primaryKey: true, type:DataTypes.INTEGER, allowNull: false, autoIncrement: true},
    title: { type: DataTypes.STRING, allowNull: false},
    director: { type: DataTypes.STRING, allowNull:false},
    duration: { type: DataTypes.INTEGER, allowNull:false},
    genre: { type: DataTypes.STRING, allowNull:false},
    description: { type: DataTypes.STRING, allowNull:true},
})

export default Movie

console.log(Movie === sequelize.models.Movie)
