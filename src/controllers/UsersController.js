const UserCreateService = require("../services/UserCreateService");
const UserRepository = require("../repositories/UsersRepository");

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const userRepository = new UserRepository();
    const userCreateService = new UserCreateService(userRepository);

    const response = await userCreateService.create({
      name,
      email,
      password,
    });

    return res.status(201).json(response);
  }
}

module.exports = UsersController;
