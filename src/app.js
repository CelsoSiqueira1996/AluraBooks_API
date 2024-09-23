import express from 'express';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import errorNotFound from './middlewares/errorNotFound.js';
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
routes(app);
app.use(errorNotFound, errorHandler);

export default app;