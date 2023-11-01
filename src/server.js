require("express-async-errors");
require("dotenv/config");

const knex = require("./database/knex");
const AppError = require("./utils/AppError");

const uploadConfig = require("./configs/upload");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();
app.use(express.json());
/* Em resumo, o CORS no Node.js é usado para controlar como seu servidor responde a solicitações de diferentes origens, tornando-o mais seguro ao permitir solicitações apenas de fontes confiáveis e controlando quais recursos podem ser acessados. */
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173/"],
    credentials: true,
  })
);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

// responsibility for routes
app.use(routes);

// handle status and error message
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.SERVER_PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
