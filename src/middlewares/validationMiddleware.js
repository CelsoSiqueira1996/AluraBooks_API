export function validateDataBody(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            next(error);
        };
    }
}

export function validateParams(schema) {
    return (req, res, next) => {
        try {
            schema.parse(req.params);
            next();
        } catch (error) {
            next(error);
        };
    }
}