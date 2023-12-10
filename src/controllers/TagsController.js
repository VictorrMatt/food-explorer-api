const TagCreateService = require("../services/TagCreateService");
const TagRepository = require("../repositories/TagsRepository");

class TagsController {
  async index(req, res) {
    const { id } = req.params;

    const tagRepository = new TagRepository();
    const tagCreateService = new TagCreateService(tagRepository);

    const response = await tagCreateService.index({
      id,
    });

    return res.status(201).json(response);
  }
}

module.exports = TagsController;
