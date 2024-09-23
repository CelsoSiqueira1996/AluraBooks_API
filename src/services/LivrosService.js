import { prisma } from "../config/prisma.js";
import NotFoundError from "../errors/NotFoundError.js";

class LivrosService {
    async getLivros() {
        try {
            const livros = await prisma.livro.findMany();
            return livros;
        } catch (error) {
            throw error;
        }
    }

    async postLivro(dto) {
        try {
            await prisma.livro.create({
                data: dto
            });
        } catch (error) {
            throw error;
        }
    }

    async getLivroById(id) {
        try {
            const livro = await prisma.livro.findUnique({
                where: {
                    id
                }
            });
            if (!livro) {
                throw new NotFoundError('Livro não encontrado!');
            }

            return livro;
        } catch (error) {
            throw error;
        }
    }

    async deleteLivro(id) {
        await this.getLivroById(id);
        try {
            await prisma.livro.delete({
                where: {
                    id
                }
            });
        } catch (error) {
            throw error;
        }
    }

    async updateLivro(id, dto) {
        await this.getLivroById(id);
        try {
            await prisma.livro.update({
                where: {
                    id
                },
                data: dto
            })
        } catch (error) {
            throw error;
        }
    }
}

export default LivrosService;