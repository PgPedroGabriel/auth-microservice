import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
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
    this.server.use(
      morgan(
        '[:date[clf]] :method :url :status :res[content-length] - :response-time ms'
      )
    );
  }

  watchErrorsHandler() {
    this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
