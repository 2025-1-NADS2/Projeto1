// IMPORTA O SEQUELIZE E A BIBLIOTECA DOTENV PARA CARREGAR VARIÁVEIS
const { Sequelize } = require("sequelize");
require("dotenv").config(); // CARREGA VARIÁVEIS DO .env

// CRIA UMA INSTÂNCIA DO SEQUELIZE USANDO AS VARIÁVEIS DO .env
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

// TESTA A CONEXÃO
(async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Conexão com o banco de dados estabelecida com sucesso.");
    } catch (error) {
        console.error("❌ Erro ao conectar com o banco de dados:", error);
    }
})();

// EXPORTA A CONEXÃO
module.exports = {
    sequelize
};