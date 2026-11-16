const { buscar, criar, editar, deletar } = require("../controllers/locatariosController");
const { locatarioAutenticado } = require("../middlewares/locatariosMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os locatários cadastrados; requer autenticação'
      #swagger.security = [{ bearerAuth: [] }]
      #swagger.responses[200] = {
          description: 'Lista de locatários retornada com sucesso',
          schema: [{
              id: '550e8400-e29b-41d4-a716-446655440000',
              nome: 'Maria Souza',
              email: 'maria@example.com',
              telefone: '11999999999',
              cpf: '12345678909',
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
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo locatário'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do locatário',
          schema: {
              $nome: 'Maria Souza',
              $email: 'maria@example.com',
              $telefone: '11999999999',
              $cpf: '12345678909'
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
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um locatário existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do locatário'
      }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Campos do locatário que serão atualizados',
          schema: {
              nome: 'Maria Souza',
              email: 'maria.nova@example.com',
              telefone: '11888888888',
              cpf: '12345678909'
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
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um locatário pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do locatário que será deletado'
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