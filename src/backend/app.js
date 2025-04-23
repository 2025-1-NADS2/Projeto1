require("./utils/db");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const fs = require("fs");
const path = require("path");

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
app.use(limiter);

if (!fs.existsSync(path.join(__dirname, "uploads"))) {
    fs.mkdirSync(path.join(__dirname, "uploads"));
}

// Rotas
const authRoutes = require("./routes/authRoutes");
const eventosRoutes = require("./routes/eventosRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

app.use("/auth", authRoutes);
app.use("/eventos", authMiddleware, eventosRoutes);

app.get("/", (req, res) => {
    res.send("API DO INSTITUTO CRIATIVO FUNCIONANDO ✅");
});

module.exports = app;