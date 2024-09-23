import { z } from "zod";

const isNotBlank = (fieldValue) => String(fieldValue).trim() !== '';

export const createLivrosSchema = z.object({
    nome: z.string().refine( isNotBlank, { message: "Blank. The field should have a value"}),
}).strict();

export const consultingLivrosSchema = z.object({
    id: z.string().uuid()
});
