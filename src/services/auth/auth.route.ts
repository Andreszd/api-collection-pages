import { Router } from 'express';
import { validationFieldsUser } from '../../middlewares/validationFieldsUser';
import { create } from '../users/users.controller';

const auth = Router();

auth.post('/signIn', () => {});

auth.post(
  '/signUp',
  validationFieldsUser,
  create
);

export default auth;
