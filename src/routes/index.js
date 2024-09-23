import express from 'express';
import livrosRoutes from './livrosRoutes.js';
import favoritosRoutes from './favoritosRoutes.js';

export default function routes(app) {
    app.route('/').get((req, res) => {
        res.status(200).send('AluraBooks API');
    });

    app.use(
        express.json(),
        livrosRoutes,
        favoritosRoutes
    );
}
