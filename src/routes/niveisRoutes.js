const { buscar, criar, editar, deletar } = require("../controllers/niveisController");
const { nivelAutenticado } = require("../middlewares/niveisMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Níveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os níveis cadastrados; requer autenticação'
      #swagger.security = [{ bearerAuth: [] }]
      #swagger.responses[200] = {
          description: 'Lista de níveis retornada com sucesso',
          schema: [{
              id: '550e8400-e29b-41d4-a716-446655440000',
              nome: 'Admin',
              descricao: 'Acesso completo ao sistema',
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
rotas.get("/", buscar);

rotas.post("/",
    /*
      #swagger.tags = ['Níveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo nível de acesso'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do nível',
          schema: {
              $nome: 'Admin',
              $descricao: 'Acesso completo ao sistema'
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
    criar);

rotas.put("/:id",
    /*
      #swagger.tags = ['Níveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um nível existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do nível'
      }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Campos do nível que serão atualizados',
          schema: {
              nome: 'Operador',
              descricao: 'Acesso parcial'
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
    editar);

rotas.delete("/:id",
    /*
      #swagger.tags = ['Níveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um nível pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do nível que será deletado'
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