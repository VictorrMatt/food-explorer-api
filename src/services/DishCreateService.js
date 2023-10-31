const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");

class DishCreateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async create({ name, category, ingredients, price, description, user_id }) {
    try {
      if (!name || !price) {
        throw new AppError("Dados insuficientes.");
      }

      const dish = await this.dishRepository.create({
        name,
        category,
        ingredients,
        price,
        description,
        user_id,
      });

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async update({ name, category, ingredients, price, description, id }) {
    try {
      const dish = await this.dishRepository.update({
        id,
        name,
        category,
        ingredients,
        price,
        description,
      });

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async delete({ id }) {
    try {
      const dish = await this.dishRepository.delete({ id });

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async index({ id }) {
    try {
      const dish = await this.dishRepository.index({ id });

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async read({ name, ingredients }) {
    try {
      const dish = await this.dishRepository.index({ name, ingredients });

      return dish;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = DishCreateService;
