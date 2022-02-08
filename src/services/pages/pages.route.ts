import { Router } from 'express';

const page = Router();

page.get('/', () => {});
page.post('/', () => {});
page.put('/:id', () => {});
page.delete('/:id', () => {});

export default page;
