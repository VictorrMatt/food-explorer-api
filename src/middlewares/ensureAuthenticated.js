// Importando a função 'verify' do módulo 'jsonwebtoken' e outros módulos necessários.
const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

// Middleware para autenticação.
function ensureAuthenticated(request, response, next) {
  // Obtém o cabeçalho 'cookie' da requisição.
  const authHeader = request.headers;

  // Verifica se o cabeçalho 'cookie' não está presente na requisição.
  if (!authHeader.cookie) {
    // Lança um erro com uma mensagem personalizada e código de status 401 (Não Autorizado).
    throw new AppError("JWT token não informado", 401);
  }

  // Divide o cabeçalho 'cookie' para extrair o token.
  const [, token] = authHeader.cookie.split("token=");

  try {
    // Verifica o token usando a chave secreta definida em 'authConfig.jwt.secret'.
    // Extrai o 'role' e 'user_id' do token verificado.
    const { role, sub: user_id } = verify(token, authConfig.jwt.secret);

    // Define a propriedade 'user' no objeto 'request' com o ID do usuário e a função 'role'.
    request.user = {
      id: Number(user_id),
      role,
    };

    // Continua a execução da requisição chamando o próximo middleware.
    return next();
  } catch {
    // Se houver algum erro na verificação do token, lança um erro com mensagem personalizada e código de status 401.
    throw new AppError("Token JWT inválido", 401);
  }
}

// Exporta o middleware para uso em outros lugares.
module.exports = ensureAuthenticated;
