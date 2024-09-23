import BaseError from "./BaseError.js";

class BadRequestError extends BaseError {
    constructor(error) {
        const errorMessages = error.errors.map((issue) => {
            return (!issue.path.length)? `${issue.message}` : `${issue.path.join('.')} is ${issue.message}`;
        }).join('; ');
        super(`Um ou mais dados fornecidos estão incorretos: ${errorMessages}`, 400)
    }
}

export default BadRequestError;