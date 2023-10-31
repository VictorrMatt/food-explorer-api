const knex = require("../database/knex");

class UsersRepository {
  async findByEmail(email) {
    try {
      const user = await knex("users").where({ email }).first();

      return user;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async create({ name, email, password }) {
    try {
      const user = { name, email, password };

      const [userId] = await knex("users").insert(user);

      if (userId) {
        const createdUser = await knex("users").where("id", userId).first();

        return createdUser;
      }
      return null;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = UsersRepository;
