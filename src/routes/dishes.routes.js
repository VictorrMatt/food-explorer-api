const { Router } = require("express");

const DishesController = require("../controllers/DishesController");
const DishesAvatarController = require("../controllers/DishesAvatarController");

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const uploadConfig = require("../configs/upload");
const multer = require("multer");
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();
const dishesAvatarController = new DishesAvatarController();

const dishesRoutes = Router();

dishesRoutes.use(ensureAuthenticated);
dishesRoutes.use(verifyUserAuthorization(["admin"]));

dishesRoutes.post("/", dishesController.create);
dishesRoutes.put("/:id", dishesController.update);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/:id", dishesController.index);
dishesRoutes.get("/", dishesController.read);
dishesRoutes.patch(
  "/:dish_id/avatar",
  upload.single("avatar"),
  dishesAvatarController.update
);

module.exports = dishesRoutes;
