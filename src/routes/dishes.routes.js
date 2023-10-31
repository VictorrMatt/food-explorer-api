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

dishesRoutes.post(
  "/",
  verifyUserAuthorization(["admin"]),
  dishesController.create
);
dishesRoutes.put(
  "/:id",
  verifyUserAuthorization(["admin"]),
  dishesController.update
);
dishesRoutes.delete(
  "/:id",
  verifyUserAuthorization(["admin"]),
  dishesController.delete
);
dishesRoutes.get("/:id", dishesController.index);
dishesRoutes.get("/", dishesController.read);
dishesRoutes.patch(
  "/:dish_id/avatar",
  verifyUserAuthorization(["admin"]),
  upload.single("avatar"),
  dishesAvatarController.update
);

module.exports = dishesRoutes;
