// IMPORTA A CONEXÃO COM O BANCO E OS TIPOS DE DADOS DO SEQUELIZE
const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

// DEFINE O MODELO 'Evento' CORRESPONDENTE À TABELA 'Events'
const Evento = sequelize.define("Evento", {
    // CHAVE PRIMÁRIA AUTO-INCREMENTO
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    // TÍTULO DO EVENTO (OBRIGATÓRIO)
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },

    // DESCRIÇÃO DO EVENTO (TEXTO LIVRE)
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    // DATA E HORA DO EVENTO (OBRIGATÓRIO)
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    // LOCALIZAÇÃO (OPCIONAL)
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },

    // URL/NOME DA IMAGEM SALVA (OPCIONAL)
    image_url: {
        type: DataTypes.STRING(500),
        allowNull: true,
    },

    // ID DO USUÁRIO CRIADOR DO EVENTO (CHAVE ESTRANGEIRA)
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: "Events", // NOME EXATO DA TABELA NO BANCO DE DADOS
    timestamps: false    // DESATIVA OS CAMPOS createdAt/updatedAt PADRÕES DO SEQUELIZE
});

// EXPORTA O MODELO PARA USO NO CONTROLLER
module.exports = { Evento };