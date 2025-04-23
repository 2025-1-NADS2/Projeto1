const express = require("express");
const eventosController = require("../controllers/eventosController");
const multer = require("multer");
const { body } = require("express-validator");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

const validarEvento = [
  body("title").notEmpty().withMessage("O título é obrigatório."),
  body("description").notEmpty().withMessage("A descrição é obrigatória."),
  body("date").isISO8601().withMessage("A data deve estar no formato ISO 8601."),
  body("location").notEmpty().withMessage("A localização é obrigatória."),
  body("created_by").isInt().withMessage("O ID do criador deve ser um número inteiro.")
];

router.get("/", eventosController.listarEventos);
router.post("/", upload.single("imagem"), validarEvento, eventosController.criarEvento);
router.put("/:id", upload.single("imagem"), validarEvento, eventosController.atualizarEvento);
router.delete("/:id", eventosController.deletarEvento);

module.exports = router;