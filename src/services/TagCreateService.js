const AppError = require("../utils/AppError");

class TagCreateService {
  constructor(tagRepository) {
    this.tagRepository = tagRepository;
  }
  async index({ id }) {
    try {
      if (!id) {
        throw new AppError("Dados insuficientes.");
      }

      const tags = await this.tagRepository.index({
        id,
      });

      if (tags[0]) {
        return tags;
      } else {
        return { message: "Não foi possível encontrar as tags." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = TagCreateService;
