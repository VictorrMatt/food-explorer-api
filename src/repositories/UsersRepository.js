const knex = require("../database/knex");

class UsersRepository {
  async findByEmail(email) {
    try {
      const user = await knex("users").where({ email }).first();

      if (user) {
        return user;
      } else {
        return { message: "Não foi possível encontrar o usuário." };
      }
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
      } else {
        return { message: "Não foi possível realizar o cadastro." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = UsersRepository;
