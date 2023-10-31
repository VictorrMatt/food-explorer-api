const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const categoriesController = new CategoriesController();

const categoriesRoutes = Router();

categoriesRoutes.use(ensureAuthenticated);
categoriesRoutes.use(verifyUserAuthorization(["admin"]));

categoriesRoutes.get("/", categoriesController.index);

module.exports = categoriesRoutes;
