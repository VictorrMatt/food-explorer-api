const knex = require("../database/knex");

class DishesRepository {
  async create({ name, category, ingredients, price, description, user_id }) {
    try {
      const dish = { name, category, ingredients, price, description, user_id };

      const [dish_id] = await knex("dishes").insert(dish);

      if (ingredients) {
        const ingredientsInsert = ingredients.map((name) => {
          return {
            dish_id,
            name,
          };
        });

        await knex("tags").insert(ingredientsInsert);
      }

      return dish_id;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update({ name, category, ingredients, price, description, id }) {
    try {
      await knex("dishes").where({ id }).update({
        name: name,
        category: category,
        price: price,
        description: description,
        updated_at: knex.fn.now(),
      });

      if (ingredients) {
        await knex("tags").where({ dish_id: id }).del();

        const ingredientsInsert = ingredients.map((name) => {
          return {
            dish_id: id,
            name,
          };
        });

        await knex("tags").where({ dish_id: id }).insert(ingredientsInsert);
      }

      return null;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete({ id }) {
    try {
      const dish = await knex("dishes").where({ id }).delete();

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async index({ id }) {
    try {
      const dish = await knex("dishes").where({ id }).first();

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read({ name, ingredients }) {
    try {
      let dishes;

      if (ingredients) {
        const [{ dish_id }] = await knex("tags")
          .whereLike("name", `%${ingredients}%`)
          .orderBy("name");
        dishes = await knex("dishes").where({ id: dish_id }).orderBy("name");
      } else {
        dishes = await knex("dishes")
          .whereLike("name", `%${name}%`)
          .orderBy("name");
      }

      return dishes;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = DishesRepository;
