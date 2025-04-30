const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");
require("dotenv").config();

// Esta es nuestra aplicación
console.log("🛠️ 2) ---Rutas registradas en app.js");

const app = express();

// Middlewares
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  return res.send("Welcome to express!");
});

// middlewares después de las rutas
app.use(errorHandler);

module.exports = app;
