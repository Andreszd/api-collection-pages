import { Router } from 'express';
import * as controller from './pages.controller';
import { authorizer } from '../../middlewares/authorizer';

const page = Router();

page.get('/', authorizer, controller.getAll);
page.get('/:id', authorizer, controller.getById);
page.get('/:idOwner', authorizer, controller.getByIdOwner);
page.post('/', authorizer, controller.create);
page.patch('/:id', authorizer, controller.updateAttr);
page.delete('/:id', authorizer, controller.remove);

export default page;
