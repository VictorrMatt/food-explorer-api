const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const dishesController = new DishesController();

const dishesRoutes = Router();

dishesRoutes.use(ensureAuthenticated);
dishesRoutes.use(verifyUserAuthorization(["admin"]));

dishesRoutes.post("/", dishesController.create);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/:id", dishesController.index);
dishesRoutes.get("/", dishesController.read);

module.exports = dishesRoutes;
