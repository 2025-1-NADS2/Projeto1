const { Evento } = require("../models");
const fs = require("fs");
const path = require("path");

exports.listarEventos = async (req, res) => {
    try {
        const eventos = await Evento.findAll();
        res.json(eventos);
    } catch (err) {
        console.error("Erro ao listar eventos:", err);
        res.status(500).json({ message: "Erro ao buscar eventos." });
    }
};

exports.criarEvento = async (req, res) => {
    try {
        const { title, description, date, location, created_by } = req.body;
        const image_url = req.file ? req.file.filename : null;

        const novoEvento = await Evento.create({
            title,
            description,
            date,
            location,
            image_url,
            created_by,
        });

        res.status(201).json(novoEvento);
    } catch (err) {
        console.error("Erro ao criar evento:", err);
        res.status(500).json({ message: "Erro ao criar evento." });
    }
};

exports.atualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, date, location, created_by } = req.body;

        const evento = await Evento.findByPk(id);

        if (!evento) {
            return res.status(404).json({ message: "Evento não encontrado." });
        }

        if (req.file && evento.image_url) {
            const caminhoAntigo = path.join(__dirname, "../uploads", evento.image_url);
            fs.unlink(caminhoAntigo, (err) => {
                if (err && err.code !== "ENOENT") {
                    console.error("Erro ao excluir imagem antiga:", err);
                }
            });
        }

        await evento.update({
            title,
            description,
            date,
            location,
            image_url: req.file ? req.file.filename : evento.image_url,
            created_by,
        });

        res.json(evento);
    } catch (err) {
        console.error("Erro ao atualizar evento:", err);
        res.status(500).json({ message: "Erro ao atualizar evento." });
    }
};

exports.deletarEvento = async (req, res) => {
    try {
        const { id } = req.params;

        const evento = await Evento.findByPk(id);

        if (!evento) {
            return res.status(404).json({ message: "Evento não encontrado." });
        }

        if (evento.image_url) {
            const caminhoImagem = path.join(__dirname, "../uploads", evento.image_url);
            fs.unlink(caminhoImagem, (err) => {
                if (err) console.warn("Erro ao excluir imagem:", err);
            });
        }

        await evento.destroy();

        res.json({ message: "Evento excluído com sucesso." });
    } catch (err) {
        console.error("Erro ao excluir evento:", err);
        res.status(500).json({ message: "Erro ao excluir evento." });
    }
};