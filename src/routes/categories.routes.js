const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoriesController = new CategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.get("/", categoriesController.index);

module.exports = categoriesRoutes;
