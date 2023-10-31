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

      if (dish_id) {
        return { message: "Prato cadastrado com sucesso." };
      } else {
        return { message: "Não foi possível realizar o cadastro." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update({ name, category, ingredients, price, description, id }) {
    try {
      const updatedDish = await knex("dishes").where({ id }).update({
        name: name,
        category: category,
        ingredients: ingredients,
        price: price,
        description: description,
      });

      if (updatedDish === 1) {
        const dish = await knex("dishes").where({ id }).first();
        return dish;
      } else {
        return { message: "Não foi possível encontrar o seu prato." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete({ id }) {
    try {
      await knex("dishes").where({ id }).delete();

      return { message: "Prato excluído com sucesso." };
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async index({ id }) {
    try {
      const dish = await knex("dishes").where({ id }).first();

      if (dish) {
        return dish;
      } else {
        return { message: "Não foi possível encontrar o seu prato." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read({ name, ingredients }) {
    try {
      let dishes;

      if (ingredients) {
        const filterTags = ingredients.split(",").map((tag) => tag.trim());

        /* using inneJoin */
        dishes = await knex("tags")
          .select(["dishes.id", "dishes.name", "dishes.user_id"])
          .whereIn("name", filterTags)
          .innerJoin("dishes.", "dishes.id", "dishes.note_id")
          .orderBy("dishes.title");
      } else {
        notes = await knex("dishes.")
          .where({ user_id })
          .whereLike("title", `%${title}%`)
          .orderBy("title");
      }

      const userTags = await knex("movie_tags").where({ user_id });
      const notesWithTags = notes.map((note) => {
        const noteTags = userTags.filter((tag) => tag.note_id === note.id);

        return {
          ...note,
          tags: noteTags,
        };
      });
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = DishesRepository;
