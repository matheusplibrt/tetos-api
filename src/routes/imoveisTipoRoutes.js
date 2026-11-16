const { buscar, criar, editar, deletar } = require("../controllers/imoveisTipoController");
const { validarDados } = require("../middlewares/imoveisTipoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Tipos de Imóveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os tipos de imóveis cadastrados; requer autenticação'
      #swagger.security = [{ bearerAuth: [] }]
      #swagger.responses[200] = {
          description: 'Lista de tipos de imóveis retornada com sucesso',
          schema: [{
              id: '550e8400-e29b-41d4-a716-446655440000',
              nome: 'Apartamento',
              descricao: 'Apartamento de 2 quartos',
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
      #swagger.tags = ['Tipos de Imóveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo tipo de imóvel'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do tipo de imóvel',
          schema: {
              $nome: 'Apartamento',
              $descricao: 'Apartamento de 2 quartos'
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
      #swagger.tags = ['Tipos de Imóveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um tipo de imóvel existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do tipo de imóvel'
      }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Campos do tipo de imóvel que serão atualizados',
          schema: {
              nome: 'Casa',
              descricao: 'Casa com 3 dormitórios'
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
      #swagger.tags = ['Tipos de Imóveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um tipo de imóvel pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do tipo de imóvel que será deletado'
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