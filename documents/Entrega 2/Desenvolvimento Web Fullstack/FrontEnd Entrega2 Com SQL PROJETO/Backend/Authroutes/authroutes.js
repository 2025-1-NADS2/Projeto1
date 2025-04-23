import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'
import authMiddleware from '../Middleware/AuthMiddleware.js'

//=========================================================== REGISTRAR USUARIO ==========================================================
    const router = express.Router()
router.post('/register', async (req, res) => {
    const {name, sobrenome, email, senha, telefone, cpf} = req.body
    console.log(req.body);
    try {
        const [existing] = await db.execute('SELECT * FROM cliente WHERE email = ?', [email])
        console.log(existing); 

        if (existing.length > 0) {
            return res.status(400).send('Usuário já existe')
        }

        const hashed = await bcrypt.hash(senha, 10)
        await db.execute('INSERT INTO cliente (nome_usuario, sobrenome_usuario, email, senha, telefone, cpf) VALUES (?, ?, ?, ?, ?, ?)', [name, sobrenome, email, hashed, telefone, cpf])
        
        res.status(200).send('Usuário registrado com sucesso!')  // Enviar resposta de sucesso
    } catch (err) {
        console.error(err)  // Mostrar o erro completo
        res.status(500).send('Erro ao registrar usuário')
    }
})




// ======================================================= Login =======================================================
router.post('/login', async (req, res) =>{
    const {email, senha} = req.body
    try{
        const [users] = await db.execute('SELECT * FROM cliente WHERE email = ?', [email])
        const user = users[0]
        if(!user) return res.status(400).send('Usuário não encontrado')
        const valid = await bcrypt.compare(senha, user.senha)
        if (!valid) return res.status(401).send('Senha Incorreta')
        const token = jwt.sign(
            {id: user.id, name: user.name, email: user.email, telefone: user.telefone, endereco: user.endereco, CPF: user.CPF},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
            )
        res.json({token})
    } catch {
        res.status(500).send('Erro ao fazer Login')
    }
})


// ===================================================== Rota protegida ========================================================
router.get('/private', authMiddleware, (req, res) => {
    console.log("Entrando")
    res.json({ message: `Bem-vindo, ${req.user.name}`})
});


router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM cliente')
        res.json(rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Erro ao buscar logins' })
    }
})


export default router

// =======================================================================================================================+