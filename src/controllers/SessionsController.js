const SessionCreateService = require("../services/SessionCreateService");
const UserRepository = require("../repositories/UsersRepository");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

// Classe para o controlador de sessões (autenticação).
class SessionsController {
  // Método assíncrono para lidar com a solicitação de autenticação.
  async create(req, res) {
    // Obtém o email e a senha fornecidos no corpo da solicitação.
    const { email, password } = req.body;

    const userRepository = new UserRepository();
    const sessionCreateService = new SessionCreateService(userRepository);

    const user = await sessionCreateService.create({
      email,
      password,
    });

    // Obtém as configurações do token JWT do arquivo 'authConfig'.
    const { secret, expiresIn } = authConfig.jwt;

    // Gera um token JWT com as informações do usuário.
    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn,
    });

    // Define um cookie no cabeçalho da resposta contendo o token JWT.
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 15 * 60 * 1000,
    });

    return res.status(201).json({ token, user });
  }
}

// Exporta a classe do controlador para uso em outros lugares.
module.exports = SessionsController;
