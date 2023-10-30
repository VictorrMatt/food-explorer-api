const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");

class SessionCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ email, password }) {
    try {
      // Verifica se existe um usuário com o email fornecido no banco de dados.
      const user = await this.userRepository.findByEmail(email);

      // Se o usuário não for encontrado, lança um erro com código de status 401 (Não Autorizado).
      if (!user) {
        throw new AppError("E-mail e/ou senha incorreta.", 401);
      }

      // Compara a senha fornecida com a senha hash armazenada no banco de dados.
      const passwordMatched = await compare(password, user.password);

      // Se a senha não corresponder, lança um erro com código de status 401 (Não Autorizado).
      if (!passwordMatched) {
        throw new AppError("E-mail e/ou senha incorreta.", 401);
      }

      // Remove a senha do usuário antes de responder à solicitação.
      delete user.password;
      return user;
    } catch (error) {
      return error;
    }
  }
}

module.exports = SessionCreateService;
