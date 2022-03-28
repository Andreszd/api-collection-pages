import { Router } from 'express';
import { upload, getByFileName } from './images.controller';
import { authorizer } from '../../middlewares/authorizer';
import multer from './images.config';

const img = Router();

img.post('/profile/:userId', authorizer, multer.single('avatar'), upload);

img.get('/profile/:filename', authorizer, getByFileName);

export default img;
