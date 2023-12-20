const AppError = require("../utils/AppError");

class DishCreateService {
  constructor(dishRepository) {
    this.dishRepository = dishRepository;
  }

  async create({ name, category, ingredients, price, description, user_id }) {
    try {
      if (!name || !price) {
        throw new AppError("Dados insuficientes.");
      }

      const dish_id = await this.dishRepository.create({
        name,
        category,
        ingredients,
        price,
        description,
        user_id,
      });

      if (dish_id) {
        return dish_id;
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
      const dish = await this.dishRepository.update({
        id,
        name,
        category,
        ingredients,
        price,
        description,
      });

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

  async delete({ id }) {
    try {
      const dish = await this.dishRepository.delete({ id });

      if (dish) {
        return { message: "Prato excluído com sucesso." };
      } else {
        return { message: "Não foi possível excluir o prato." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async index({ id }) {
    try {
      const dish = await this.dishRepository.index({ id });

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
      const dish = await this.dishRepository.read({ name, ingredients });

      if (dish) {
        return dish;
      } else {
        return { message: "Não foi possível encontrar o prato." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = DishCreateService;
