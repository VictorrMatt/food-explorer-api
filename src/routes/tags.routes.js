// Importando os módulos necessários.
const { Router } = require("express");
const TagsController = require("../controllers/TagsController");

const tagsController = new TagsController();
const tagsRoutes = Router();

tagsRoutes.get("/:id", tagsController.index);

// Exportando as rotas para uso em outros lugares.
module.exports = tagsRoutes;
