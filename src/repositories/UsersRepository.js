const knex = require("../database/knex");

class UsersRepository {
  async findByEmail(email) {
    const user = await knex("users").where({ email }).first();

    return user;
  }

  async create({ name, email, password }) {
    const user = { name, email, password };

    const [userId] = await knex("users").insert(user);

    if (userId) {
      const createdUser = await knex("users").where("id", userId).first();
      return createdUser;
    }

    // Se o userId não for válido, você pode lançar um erro ou retornar null, dependendo das suas necessidades.
    return null;
  }
}

module.exports = UsersRepository;
