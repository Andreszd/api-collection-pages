import { Request, Response, Router } from 'express';
import { getAll, getById, updateAttr } from './users.controller';

import { authorizer } from '../../middlewares/authorizer';

const user = Router();

user.get('/', authorizer, getAll);

user.get('/:id', authorizer, getById);

user.patch('/:id', authorizer, updateAttr);

user.delete('/:id', (req: Request, res: Response) => {});

export default user;
