import { Request, Response, Router } from 'express';
import { getAll, getById } from './users.controller';

const user = Router();

user.get('/', async (req: Request, res: Response) => {
  const users = await getAll();
  return res.status(200).send(users);
});

user.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getById(parseInt(id));
  return res.status(200).send(user);
});

user.put('/:id', (req: Request, res: Response) => {});

user.delete('/:id', (req: Request, res: Response) => {});

export default user;
