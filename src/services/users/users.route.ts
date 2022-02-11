import { Request, Response, Router } from 'express';
import { getAll, getById } from './users.controller';

const user = Router();

user.get('/', getAll);

user.get('/:id', getById);

user.put('/:id', (req: Request, res: Response) => {});

user.delete('/:id', (req: Request, res: Response) => {});

export default user;
