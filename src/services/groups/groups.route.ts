import { Router } from 'express';
import { create, getById, patch } from './groups.controller';

const group = Router();

group.get('/:id', getById);
group.post('/', create);
group.put('/:id', () => {});
group.patch('/:id', patch);
group.delete('/:id', () => {});

export default group;
