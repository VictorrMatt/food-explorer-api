const AppError = require("../utils/AppError");

class CategoryCreateService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async index({ category }) {
    try {
      if (!category) {
        throw new AppError("Dados insuficientes.");
      }

      const dishes = await this.categoryRepository.index({
        category,
      });

      if (dishes[0]) {
        return dishes;
      } else {
        return { message: "Não foi possível encontrar o prato." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = CategoryCreateService;
