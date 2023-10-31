const knex = require("../database/knex");

class CategoriesRepository {
  async index({ category }) {
    try {
      const dishes = await knex("dishes")
        .whereLike("category", `%${category}%`)
        .orderBy("name");

      return dishes;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = CategoriesRepository;
