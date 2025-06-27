import { Sequelize, DataTypes} from "sequelize"
const sequelize = new Sequelize({
    dialect: "mysql",
    storage: "/src/config/database.js"
})
const Movie = sequelize.define("Movie", {
    title: { type: DataTypes.STRING, allowNull: false},
    director: { type: DataTypes.STRING, allowNull:false},
    duration: { type: DataTypes.INTEGER, allowNull:false},
    genre: { type: DataTypes.STRING, allowNull:false},
    description: { type: DataTypes.STRING, allowNull:true},
})

console.log(Movie === sequelize.models.Movie)

try {
    await sequelize.authenticate()
    console.log("Conexión exitosa a MySQL")
} catch(error) {
    console.log("Error: No se pudo establecer la conexión con MySQL")
}
