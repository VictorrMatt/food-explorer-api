const DishesCreateService = require("../services/DishCreateService");
const DishesRepository = require("../repositories/DishesRepository");

class DishesController {
  async create(req, res) {
    const { name, category, ingredients, price, description } = req.body;
    const user_id = req.user.id;

    const dishRepository = new DishesRepository();
    const dishCreateService = new DishesCreateService(dishRepository);

    const response = await dishCreateService.create({
      name,
      category,
      ingredients,
      price,
      description,
      user_id,
    });

    return res.status(201).json(response);
  }

  async update(req, res) {
    const { name, category, ingredients, price, description } = req.body;
    const { id } = req.params;

    const dishRepository = new DishesRepository();
    const dishCreateService = new DishesCreateService(dishRepository);

    const response = await dishCreateService.update({
      name,
      category,
      ingredients,
      price,
      description,
      id,
    });

    return res.status(201).json(response);
  }

  async delete(req, res) {
    const { id } = req.params;

    const dishRepository = new DishesRepository();
    const dishCreateService = new DishesCreateService(dishRepository);

    const response = await dishCreateService.delete({
      id,
    });

    return res.status(201).json(response);
  }

  async index(req, res) {
    const { id } = req.params;

    const dishRepository = new DishesRepository();
    const dishCreateService = new DishesCreateService(dishRepository);

    const response = await dishCreateService.index({
      id,
    });

    return res.status(201).json(response);
  }

  async read(req, res) {
    const { name, ingredients } = req.query;

    const dishRepository = new DishesRepository();
    const dishCreateService = new DishesCreateService(dishRepository);

    const response = await dishCreateService.read({
      name,
      ingredients,
    });

    return res.status(201).json(response);
  }
}

module.exports = DishesController;
