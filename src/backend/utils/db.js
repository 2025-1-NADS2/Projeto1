import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()
const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

console.log("Conectado ao MySQL!")

export default db