// Importando os módulos necessários.
const knex = require("../database/knex");
const AppError = require("../utils/AppError");

// Classe para o controlador de validação de usuários.
class UsersValidatedController {
  // Método assíncrono para lidar com a solicitação de validação de usuários.
  async index(request, response) {
    // Obtém o objeto 'user' da solicitação, que foi adicionado pelo middleware de autenticação.
    const { user } = request;

    // Verifica se o usuário com o ID fornecido existe no banco de dados.
    const checkUserExists = await knex("users").where({ id: user.id });

    // Se nenhum usuário for encontrado com o ID fornecido, lança um erro com código de status 401 (Não Autorizado).
    if (checkUserExists.length === 0) {
      throw new AppError("Não autorizado", 401);
    }

    // Se o usuário for encontrado, responde com um código de status 200 (OK) e um JSON vazio.
    return response.status(200).json();
  }
}

// Exporta a classe do controlador para uso em outros lugares.
module.exports = UsersValidatedController;
