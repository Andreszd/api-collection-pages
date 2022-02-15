import { Router } from 'express';
import * as controller from './pages.controller';

const page = Router();

page.get('/', controller.getAll);
page.get('/:id', controller.getById);
page.get('/:idOwner', controller.getByIdOwner);
page.post('/', controller.create);
page.patch('/:id', controller.updateAttr);
page.delete('/:id', controller.remove);

export default page;
