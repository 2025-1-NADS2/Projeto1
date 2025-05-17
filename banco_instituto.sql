CREATE DATABASE banco_instituto;
USE banco_instituto;

/*FUNÇÃO PARA MOSTRAR TODAS AS TABELAS*/
SHOW TABLES;

/*CRIAÇÃO DA TABELA USUÁRIO*/
CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(255) NOT NULL,
    sobrenome_usuario VARCHAR(255) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    email VARCHAR(255) NOT NULL
);
/*MOSTRA DADOS DA TABELA USUÁRIO*/
SELECT * FROM usuario;
/*MOSTRAR A ESTRUTURA DA TABELA USUÁRIO*/
DESCRIBE usuario;


/*CRIAÇÃO DA TABELA PARTICIPANTE*/
CREATE TABLE participante (
    id_participante INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNIQUE,
    tipo_ingresso VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);
/*MOSTRA DADOS DA TABELA PARTICIPANTE*/
SELECT * FROM participante;
/*MOSTRAR A ESTRUTURA DA TABELA PARTICIPANTE*/
DESCRIBE participante;


/*CRIAÇÃO DA TABELA ADMINSTRADOR*/
CREATE TABLE administrador (
    id_admin INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNIQUE,
    nivel_acesso VARCHAR(50),
    cargo VARCHAR(50),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);
/*MOSTRA DADOS DA TABELA ADMINSTRADOR*/
SELECT * FROM administrador;
/*MOSTRAR A ESTRUTURA DA TABELA ADMINSTRADOR*/
DESCRIBE administrador;


/*CRIAÇÃO DA TABELA EVENTOS*/
CREATE TABLE eventos (
    id_evento INT PRIMARY KEY AUTO_INCREMENT,
    id_admin INT UNIQUE,
    nome_evento VARCHAR(255) NOT NULL,
    preco VARCHAR(100) NOT NULL,
    data_hora DATETIME NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    descricao TEXT,
    organizadores VARCHAR(255),
    FOREIGN KEY (id_admin) REFERENCES administrador(id_admin) ON DELETE SET NULL
);
/*MOSTRA DADOS DA TABELA EVENTOS*/
SELECT * FROM eventos;
/*MOSTRAR A ESTRUTURA DA TABELA EVENTOS*/
DESCRIBE eventos;


/*CRIAÇÃO DA TABELA IMAGENS*/
CREATE TABLE imagens (
    id_imagem INT PRIMARY KEY AUTO_INCREMENT,
    nome_arquivo VARCHAR(255) NOT NULL,
    caminho_imagem VARCHAR(255) NOT NULL,
    upload_imagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_imagem VARCHAR(50)
);
/*MOSTRA DADOS DA TABELA IMAGENS*/
SELECT * FROM imagens;
/*MOSTRAR A ESTRUTURA DA TABELA IMAGENS*/
DESCRIBE imagens;
