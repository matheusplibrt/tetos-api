const { buscar, criar, editar, deletar } = require("../controllers/imoveisController");
const { validarDados } = require("../middlewares/imoveisMiddlewares");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/imoveis')
    },
    filename: function (req, file, cb) {
        const nome = path.basename(file.originalname);
        cb(null, `${Date.now()}-${nome}`);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (_, file, callback) => {
        const tiposAceitos = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!tiposAceitos.includes(file.mimetype)) {
            callback(new Error("Tipo de arquivo não permitido. Envie apenas imagens."));
            return;
        }
        callback(null, true);
    }
});



const rotas = require("express").Router();

rotas.get("/", 
        /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os imóveis cadastrados sem expor dados sensíveis; requer autenticação'
      #swagger.security = [{ bearerAuth: [] }]
      #swagger.responses[200] = {
          description: 'Lista de imóveis retornada com sucesso',
          schema: [{
              id: '550e8400-e29b-41d4-a716-446655440000',
              endereco: 'Rua das Flores, 123',
              valor: '2500.00',
              status: 'disponivel',
              tipo_id: '550e8400-e29b-41d4-a716-446655440001',
              locatario_id: '550e8400-e29b-41d4-a716-446655440002',
              createdAt: '2026-11-09T00:00:00.000Z',
              updatedAt: '2026-11-09T00:00:00.000Z'
          }]
      }
      #swagger.responses[401] = {
          description: 'Acesso não autorizado ou token inválido'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar);
rotas.post("/",
     /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo imóvel'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do imóvel',
          schema: {
              $endereco: 'Rua das Flores, 123',
              $valor: '2500.00',
              $status: 'disponivel',
              $tipo_id: '550e8400-e29b-41d4-a716-446655440001',
              $locatario_id: '550e8400-e29b-41d4-a716-446655440002'
          }
      }
      #swagger.responses[201] = {
          description: 'Registro criado com sucesso',
          schema: { type: 'success', description: 'Registro criado com sucesso.' }
      }
      #swagger.responses[400] = {
          description: 'Dados inválidos ou faltando'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    upload.single('imagem'), validarDados, criar);
rotas.put("/:id", 
      /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um imóvel existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do imóvel'
      }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Campos do imóvel que serão atualizados',
          schema: {
              endereco: 'Rua das Flores, 456',
              valor: '3200.00',
              status: 'alugado',
              tipo_id: '550e8400-e29b-41d4-a716-446655440001',
              locatario_id: '550e8400-e29b-41d4-a716-446655440002'
          }
      }
      #swagger.responses[200] = {
          description: 'Registro atualizado com sucesso',
          schema: { type: 'success', description: 'Registro atualizado com sucesso.' }
      }
      #swagger.responses[404] = {
          description: 'Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    validarDados, editar);
rotas.delete("/:id", 
     /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um imóvel pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do imóvel que será deletado'
      }
      #swagger.responses[200] = {
          description: 'Registro deletado com sucesso',
          schema: { type: 'success', description: 'Registro deletado com sucesso.' }
      }
      #swagger.responses[404] = {
          description: 'Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    deletar);

module.exports = rotas;