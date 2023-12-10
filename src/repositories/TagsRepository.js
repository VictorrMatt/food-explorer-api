const knex = require("../database/knex");

class TagsRepository {
  async index({ id }) {
    try {
      const tags = await knex("tags").where({ dish_id: id });

      return tags;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = TagsRepository;
