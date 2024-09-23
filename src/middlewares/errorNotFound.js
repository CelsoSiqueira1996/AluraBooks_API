import NotFoundError from "../errors/NotFoundError.js";

export default function errorNotFound(req, res, next) {
    const error = new NotFoundError();
    next(error);
}