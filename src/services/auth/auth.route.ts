import { Router } from 'express';
import { validationFieldsUserRegister } from '../../middlewares/validationFieldsUser';
import { signIn } from './auth.controller';
import { create } from '../users/users.controller';

const auth = Router();

auth.post('/signIn', signIn);

auth.post('/signUp', validationFieldsUserRegister, create);

export default auth;
