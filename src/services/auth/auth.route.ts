import { Router, Request, Response, NextFunction } from 'express';
import { validationFieldsUser } from '../../middlewares/validationFieldsUser';
import { create } from '../users/user.service';

const auth = Router();

auth.post('/signIn', () => {});

auth.post(
  '/signUp',
  validationFieldsUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await create(req.body);
      return res.status(201).json({
        response: 'successfull',
        data: user,
      });
    } catch (error) {
      return next(error);
    }
  }
);

export default auth;
