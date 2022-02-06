import { Router } from 'express';

const group = Router();

group.get('/', () => {});
group.post('/', () => {});
group.put('/:id', () => {});
group.delete('/:id', () => {});

export default group;
