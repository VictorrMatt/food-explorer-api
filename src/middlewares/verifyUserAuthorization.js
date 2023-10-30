// Importando o módulo de erros personalizados.
const AppError = require("../utils/AppError");

// Função que retorna um middleware para verificar a autorização do usuário com base em uma função de verificação de função.
function verifyUserAuthorization(roleToVerify) {
  // Esta função é um middleware que será usado para verificar a autorização do usuário.
  return (request, response, next) => {
    // Obtém a função do usuário a partir do objeto 'user' da solicitação, que deve ser configurado anteriormente por um middleware de autenticação.
    const { role } = request.user;

    // Verifica se a função do usuário não está incluída no array 'roleToVerify'.
    if (!roleToVerify.includes(role)) {
      // Se a função não for autorizada, lança um erro com código de status 401 (Não Autorizado).
      throw new AppError("Não autorizado", 401);
    }

    // Se o usuário estiver autorizado, continua a execução da solicitação chamando o próximo middleware.
    return next();
  };
}

// Exporta a função 'verifyUserAuthorization' para uso em outros lugares.
module.exports = verifyUserAuthorization;
