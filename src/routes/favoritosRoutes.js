import express from 'express';
import FavoritosController from '../controllers/FavoritosController.js';
import { validateParams } from '../middlewares/validationMiddleware.js';
import { consultingLivrosSchema } from '../schemas/livroSchemas.js';

const favoritosRoutes = express.Router();

favoritosRoutes
    .get('/favoritos', FavoritosController.getFavoritos)
    .post('/favoritos', FavoritosController.postFavoritos)
    .delete('/favoritos/:id', validateParams(consultingLivrosSchema), FavoritosController.deleteFavoritos);

export default favoritosRoutes;
