const express = require('express');

const PessoaController = require('./controllers/pessoaController');
const AutorController = require('./controllers/autorController');
const EditoraController = require('./controllers/editoraController');
const GeneroController = require('./controllers/generoController');
const LinguagemController = require('./controllers/LinguagemController');
const LivroController = require('./controllers/LivroController');
const EmprestimoController = require('./controllers/EmprestimoController');
const routes = express.Router();

routes.post('/pessoa', PessoaController.store);
routes.get('/pessoa', PessoaController.getAll);
routes.get('/pessoa/:id', PessoaController.getById);
routes.put('/pessoa/:id', PessoaController.edit);
routes.delete('/pessoa/:id', PessoaController.delete);

routes.post('/autor', AutorController.store);
routes.get('/autor', AutorController.getAll);
routes.get('/autor/:id', AutorController.getById);
routes.put('/autor/:id', AutorController.edit);
routes.delete('/autor/:id', AutorController.delete);

routes.post('/editora', EditoraController.store);
routes.get('/editora', EditoraController.getAll);
routes.get('/editora/:id', EditoraController.getById);
routes.put('/editora/:id', EditoraController.edit);
routes.delete('/editora/:id', EditoraController.delete);

routes.post('/genero', GeneroController.store);
routes.get('/genero', GeneroController.getAll);
routes.get('/genero/:id', GeneroController.getById);
routes.put('/genero/:id', GeneroController.edit);
routes.delete('/genero/:id', GeneroController.delete);

routes.post('/linguagem', LinguagemController.store);
routes.get('/linguagem', LinguagemController.getAll);
routes.get('/linguagem/:id', LinguagemController.getById);
routes.put('/linguagem/:id', LinguagemController.edit);
routes.delete('/linguagem/:id', LinguagemController.delete);

routes.post('/livro', LivroController.store);
routes.get('/livro', LivroController.getAll);
routes.get('/livro/:id', LivroController.getById);
routes.put('/livro/:id', LivroController.edit);
routes.delete('/livro/:id', LivroController.delete);

routes.post('/emprestimo', EmprestimoController.store);
routes.get('/emprestimo', EmprestimoController.getAll);

module.exports = routes;