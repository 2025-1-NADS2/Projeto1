const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

exports.register = [
    body("name").notEmpty().withMessage("Nome é obrigatório."),
    body("email").isEmail().withMessage("Email inválido."),
    body("password").isLength({ min: 6 }).withMessage("A senha deve ter pelo menos 6 caracteres."),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, password, role_id } = req.body;

            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return res.status(400).json({ message: "Email já cadastrado." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name,
                email,
                password: hashedPassword,
                role_id,
            });

            res.status(201).json({ message: "Usuário registrado com sucesso.", user: newUser });
        } catch (err) {
            console.error("Erro no registro:", err);
            res.status(500).json({ message: "Erro ao registrar usuário." });
        }
    },
];