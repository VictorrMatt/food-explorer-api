// Importando os módulos e configurações necessários
const fs = require("fs"); // Módulo de sistema de arquivos para operações de arquivo
const path = require("path"); // Módulo para lidar com caminhos de arquivo
const uploadConfig = require("../configs/upload"); // Importa as configurações de upload

// Classe para gerenciamento de armazenamento em disco
class DiskStorage {
  // Método assíncrono para salvar um arquivo
  async saveFile(file) {
    // Move o arquivo temporário para a pasta de uploads definitiva
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file), // Origem (temporário)
      path.resolve(uploadConfig.UPLOADS_FOLDER, file) // Destino (uploads)
    );

    // Retorna o nome do arquivo salvo
    return file;
  }

  // Método assíncrono para excluir um arquivo
  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file); // Caminho completo para o arquivo

    try {
      // Verifica se o arquivo existe usando fs.promises.stat
      await fs.promises.stat(filePath);
    } catch {
      // Se o arquivo não existir, retorna silenciosamente
      return;
    }

    // Se o arquivo existe, exclui-o usando fs.promises.unlink
    await fs.promises.unlink(filePath);
  }
}

// Exporta a classe DiskStorage para uso em outros módulos
module.exports = DiskStorage;
