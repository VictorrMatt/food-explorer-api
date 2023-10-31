const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ name, email, password }) {
    try {
      if (!name || !email || !password) {
        throw new AppError("Dados insuficientes.");
      }

      const checkUserExists = await this.userRepository.findByEmail(email);

      if (checkUserExists) {
        throw new AppError("Este e-mail já está em uso.", 400);
      }

      const hashedPassword = await hash(password, 8);

      const user = {
        name,
        email,
        password: hashedPassword,
      };

      const createdUser = await this.userRepository.create(user);

      if (createdUser) {
        return createdUser;
      } else {
        return { message: "Não foi possível realizar o cadastro." };
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = UserCreateService;
