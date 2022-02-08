import { Router, Request, Response } from 'express';
import { create } from '../users/user.service';

const auth = Router();

auth.post('/signIn', () => {});

auth.post('/signUp', async (req: Request, res: Response) => {
  const user = await create(req.body);
  return res.status(201).send(user);
});

export default auth;
