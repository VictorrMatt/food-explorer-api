// Importando módulos e pacotes necessários
const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

// Definindo o caminho da pasta temporária e a pasta de uploads
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

// Configurando o armazenamento do Multer
const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(req, file, callback) {
      // Gerando um hash criptográfico aleatório para o nome do arquivo
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      // Chamando a função de retorno com o nome de arquivo gerado
      return callback(null, fileName);
    },
  }),
};

// Exportando as constantes e configurações
module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
};
