class BaseError extends Error {
    constructor(message='Internal server error', status=500) {
        super();
        this.message = message;
        this.status = status;
    }

    sendAnswer(res) {
        res.status(this.status).send({ message: this.message });
    }
}

export default BaseError;