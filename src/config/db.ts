import { Dialect, Sequelize } from 'sequelize'
import dotenv from "dotenv";
dotenv.config();
const dbName = process.env.POSTGRES_DB as string
const dbUser = process.env.POSTGRES_USER as string
const dbHost = process.env.POSTGRES_HOST as string
const dbPassword = process.env.POSTGRES_PASSWORD as string
const dbDriver = process.env.DB_DRIVER as Dialect

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver
})

const authenticateDBConnection = async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default authenticateDBConnection;