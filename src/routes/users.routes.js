// Importando os módulos necessários.
const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UsersValidatedController = require("../controllers/UsersValidatedController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// Instanciando os controladores e o roteador.
const usersController = new UsersController();
const usersValidatedController = new UsersValidatedController();
const usersRoutes = Router();

// Definindo rotas e associando controladores e middlewares a elas.
usersRoutes.post("/", usersController.create); // Rota para criar um novo usuário usando o método 'create' do 'UsersController'.
usersRoutes.get(
  "/validated",
  ensureAuthenticated,
  usersValidatedController.index
); // Rota protegida por autenticação para validar um usuário usando o método 'index' do 'UsersValidatedController'.

// Exportando as rotas para uso em outros lugares.
module.exports = usersRoutes;
