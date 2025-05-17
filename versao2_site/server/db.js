import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

console.log("Host:", process.env.DB_HOST)
console.log("User:", process.env.DB_USER)
console.log("Database:", process.env.DB_DATABASE)

const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

console.log("Conectado ao MySQL!")

export default db
