// IMPORTA OS TIPOS DO SEQUELIZE E O ORM
const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

// BIBLIOTECA PARA HASH DE SENHA
const bcrypt = require("bcrypt");

// DEFINE O MODELO 'User'
const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true, // Ativa createdAt e updatedAt
});

// ANTES DE SALVAR, FAZ O HASH DA SENHA
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

module.exports = { User };