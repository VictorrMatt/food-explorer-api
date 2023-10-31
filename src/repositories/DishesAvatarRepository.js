const knex = require("../database/knex");

class DishesRepository {
  async index({ dish_id }) {
    try {
      const dish = await knex("dishes").where({ id: dish_id }).first();

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update({ dish, dish_id }) {
    await knex("dishes").update(dish).where({ id: dish_id });
  }
}

module.exports = DishesRepository;
