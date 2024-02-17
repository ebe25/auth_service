const { Sequelize } = require('sequelize');
const  dotenv  = require("dotenv");
dotenv.config();
const dbName = process.env.POSTGRES_DB 
const dbUser = process.env.POSTGRES_USER 
const dbHost = process.env.POSTGRES_HOST 
const dbPassword = process.env.POSTGRES_PASSWORD 
const dbDriver = process.env.DB_DRIVER


const sequelize = new Sequelize(`${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:5432/${dbName}`)

const authenticateDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports= authenticateDBConnection;