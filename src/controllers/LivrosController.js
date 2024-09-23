import LivrosService from "../services/LivrosService.js";

const livrosService = new LivrosService();

class LivrosController {
    static async getLivros(req, res, next) {
        try {
            const resultado = await livrosService.getLivros();
            res.status(200).send(resultado);
        } catch(error) {
            next(error);
        }
    }

    static async getLivroById(req, res, next) {
        try {
            const id = req.params.id;
            const resultado = await livrosService.getLivroById(id);
            res.status(200).send(resultado);
        } catch(error) {
            next(error);
        }
    }

    static async postLivro(req, res, next) {
        try {
            const dto = req.body;
            await livrosService.postLivro(dto);
            res.status(201).send({ message: 'Livro criado com sucesso!'});
        } catch(error) {
            next(error);
        }
    }

    static async updateLivro(req, res, next) {
        try {
            const dto = req.body;
            const id = req.params.id;
            await livrosService.updateLivro(id, dto);
            res.status(200).send({ message: 'Livro atualizado com sucesso!'});
        } catch(error) {
            next(error);
        }
    }

    static async deleteLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livrosService.deleteLivro(id);
            res.status(200).send({ message: 'Livro deletado com sucesso!'});
        } catch(error) {
            next(error);
        }
    }
}

export default LivrosController;