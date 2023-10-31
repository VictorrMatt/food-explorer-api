const CategoryCreateService = require("../services/CategoryCreateService");
const CategoryRepository = require("../repositories/CategoriesRepository");

class CategoriesController {
  async index(req, res) {
    const { category } = req.body;

    const categoryRepository = new CategoryRepository();
    const categoryCreateService = new CategoryCreateService(categoryRepository);

    const response = await categoryCreateService.index({
      category,
    });

    return res.status(201).json(response);
  }
}

module.exports = CategoriesController;
