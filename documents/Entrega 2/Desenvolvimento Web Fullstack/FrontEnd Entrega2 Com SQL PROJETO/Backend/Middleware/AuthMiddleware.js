import jwt from 'jsonwebtoken'

// ===============================================Middleware de autenticação ======================================================
export default function authMiddleware(req, res, next) {
    const auth = req.headers.authorization
    if (!auth) return res.status(401).send('Token ausente')
    const token = auth.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        res.status(403).send('Token inválido ou expirado')
    }
}

