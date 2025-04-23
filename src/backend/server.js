// CARREGA AS VARIÁVEIS DE AMBIENTE DO ARQUIVO .ENV
require("dotenv").config();

// IMPORTA O APP CONFIGURADO (EXPRESS + ROTAS + MIDDLEWARES)
const app = require("./app");

// IMPORTA A INSTÂNCIA SEQUELIZE E OS MODELOS (CASO PRECISE FAZER OPERAÇÕES ANTES DO SYNC)
const { sequelize } = require("./utils/db");
const { User, Evento } = require("./models");

// DEFINE A PORTA USANDO O .ENV OU 3000 COMO PADRÃO
const PORT = process.env.PORT || 3000;

// FUNÇÃO ASSÍNCRONA PARA INICIALIZAR O SERVIDOR E O BANCO
const startServer = async () => {
  try {
    // SINCRONIZA O BANCO (SEQUELIZE MODELS COM MYSQL)
    await sequelize.sync({ alter: true }); // alter: true => ajusta automaticamente sem apagar dados

    console.log("✅ Banco de dados sincronizado com sucesso.");

    // INICIA O SERVIDOR
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (err) {
    // EXIBE ERRO CASO A SINCRONIZAÇÃO FALHE
    console.error("❌ Falha ao sincronizar o banco de dados:", err);
  }
};

// CHAMA A FUNÇÃO DE INICIALIZAÇÃO
startServer();