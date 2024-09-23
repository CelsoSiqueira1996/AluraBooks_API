import BaseError from "../errors/BaseError.js";
import BadRequestError from "../errors/BadRequestError.js";
import { ZodError } from "zod";

export default function errorHandler(error, req, res, next) {
    if(error instanceof ZodError) {
        new BadRequestError(error).sendAnswer(res);
    } else if(error instanceof BaseError) {
        error.sendAnswer(res);
    } else {
        new BaseError().sendAnswer(res);
    }
}