const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");
const dishesRouter = require("./dishes.routes");
const categoriesRouter = require("./categories.routes");
const tagsRouter = require("./tags.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/dishes", dishesRouter);
routes.use("/categories", categoriesRouter);
routes.use("/tags", tagsRouter);

module.exports = routes;
