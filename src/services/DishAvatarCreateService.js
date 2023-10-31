const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishAvatarCreateService {
  constructor(dishAvatarRepository) {
    this.dishAvatarRepository = dishAvatarRepository;
  }

  async update({ dish_id, avatarFileName }) {
    try {
      if (!dish_id || !avatarFileName) {
        throw new AppError("Dados insuficientes.");
      }

      const diskStorage = new DiskStorage();

      const dish = await this.dishAvatarRepository.index({ dish_id });

      if (!dish) {
        throw new AppError(
          "Somente usuários autenticados podem alterar o avatar.",
          401
        );
      }

      if (dish.avatar) {
        await diskStorage.deleteFile(dish.avatar);
      }

      const filename = await diskStorage.saveFile(avatarFileName);
      dish.avatar = filename;

      await this.dishAvatarRepository.update({ dish, dish_id });

      return { message: "Perfil atualizado com sucesso." };
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = DishAvatarCreateService;
