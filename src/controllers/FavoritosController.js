import FavoritosService from "../services/FavoritosService.js";

const favoritosService = new FavoritosService();

class FavoritosController {
    static async getFavoritos(req, res, next) {
        try {
            const resultado = await favoritosService.getFavoritos();
            res.status(200).send(resultado);
        } catch (error) {
            next(error);
        }
    }

    static async postFavoritos(req, res, next) {
        try {
            const dto = req.body;
            await favoritosService.postFavorito(dto);
            res.status(201).send({ message: 'Livro favoritado com sucesso!' });
        } catch (error) {
            next(error);
        }
    }

    static async deleteFavoritos(req, res, next) {
        try {
            const id = req.params.id;
            await favoritosService.deleteFavorito(id);
            res.status(200).send({ message: 'Livro deletado de favoritos com sucesso!' })
        } catch (error) {
            next(error);
        }
    }
}

export default FavoritosController;