import jwt from 'jsonwebtoken';

const SECRET = "meusegredoseguro123";

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: "Acesso negado. Token não fornecido." });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next(); // Libera para acessar a rota
    } catch (error) {
        res.status(401).json({ error: "Token inválido ou expirado." });
    }
};
