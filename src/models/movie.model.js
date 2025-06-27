import { Sequelize, DataTypes} from "sequelize"
const sequelize = new Sequelize({
    dialect: "mysql",
    storage: "/src/config/database.js"
})
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
