import { prisma } from "../config/prisma.js";
import LivrosService from "./LivrosService.js";
import NotFoundError from "../errors/NotFoundError.js";

class FavoritosService {
    async getFavoritos() {
        try {
            const favoritos = await prisma.favorito.findMany();
            return favoritos;
        } catch (error) {
            throw error;
        }
    };

    async postFavorito(dto) {
        const livro = await new LivrosService().getLivroById(dto.id);
        try {
            await prisma.favorito.create({
                data: livro
            });
        } catch (error) {
            throw error;
        }
    }

    async getFavoritoById(id) {
        try {
            const favorito = await prisma.favorito.findUnique({
                where: {
                    id
                }
            });
            if (!favorito) {
                throw new NotFoundError('Livro não encontrado!');
            }

        } catch (error) {
            throw error;
        }
    }

    async deleteFavorito(id) {
        await this.getFavoritoById(id);
        try {
            await prisma.favorito.delete({
                where: {
                    id
                }
            })
        } catch (error) {
            throw error;
        }
    }

}

export default FavoritosService;