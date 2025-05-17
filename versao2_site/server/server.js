import express  from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes.js' //Inserir essa linha

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use("/api", routes)
app.use("/", express.static("public"))




//Conexão
app.listen(port, ()=> {
    console.log(`Servidor rodando em: http://localhost:${port}`)
})

console.log("Server rodando")