import express from 'express';
import LivrosController from '../controllers/LivrosController.js';
import { validateDataBody, validateParams } from '../middlewares/validationMiddleware.js';
import { consultingLivrosSchema, createLivrosSchema } from '../schemas/livroSchemas.js';

const livrosRoutes = express.Router();

livrosRoutes
    .get('/livros', LivrosController.getLivros)
    .get('/livros/:id', validateParams(consultingLivrosSchema), LivrosController.getLivroById)
    .post('/livros', validateDataBody(createLivrosSchema) , LivrosController.postLivro)
    .delete('/livros/:id', validateParams(consultingLivrosSchema) , LivrosController.deleteLivro)
    .put('/livros/:id', validateParams(consultingLivrosSchema), validateDataBody(createLivrosSchema), LivrosController.updateLivro);

export default livrosRoutes;