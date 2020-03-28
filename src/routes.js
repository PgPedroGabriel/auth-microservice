import { Router } from 'express';

import UserController from './controllers/UserController';
import UserCreateValidation from './services/validations/UserCreateValidation';
import UserUpdatedValidation from './services/validations/UserUpdatedValidation';
import UserAuthentication from './services/authentication/UserAuthentication';

const routes = new Router();

routes.get('/', UserController.list);
routes.get('/:id', UserController.read);
routes.get('/auth/confirm-mail/:token', UserController.confirmEmail);
routes.get('/auth/check-token', UserAuthentication, UserController.checkToken);

routes.post('/', UserCreateValidation, UserController.create);
routes.post('/auth', UserController.auth);

routes.put('/auth/verify-email/:token', UserController.verifyEmail);
routes.put(
  '/:id',
  UserAuthentication,
  UserUpdatedValidation,
  UserController.update
);

routes.delete('/:id', UserAuthentication, UserController.delete);

export default routes;
