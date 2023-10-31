const DishAvatarCreateService = require("../services/DishAvatarCreateService");
const DishesAvatarRepository = require("../repositories/DishesAvatarRepository");

class DishesAvatarController {
  async update(req, res) {
    const { dish_id } = req.params;
    const avatarFileName = req.file.filename;

    const dishAvatarRepository = new DishesAvatarRepository();
    const dishAvatarCreateService = new DishAvatarCreateService(
      dishAvatarRepository
    );

    const response = await dishAvatarCreateService.update({
      dish_id,
      avatarFileName,
    });

    return res.json(response);
  }
}

module.exports = DishesAvatarController;
