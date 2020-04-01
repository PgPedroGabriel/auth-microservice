import express from 'express';
import cors from 'cors';
import morgan from './configs/morgan';
import routes from './routes';
import './database';
import Sentry from './configs/sentry';

class App {
  constructor() {
    this.server = express();
    this.watchRequestsHandler();
    this.middlewares();

    this.routes();

    this.watchErrorsHandler();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  watchRequestsHandler() {
    this.server.use(morgan);
  }

  watchErrorsHandler() {
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
