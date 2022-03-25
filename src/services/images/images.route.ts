import { Router } from 'express';
import { upload } from './images.controller';
import { authorizer } from '../../middlewares/authorizer';
import multer from './images.config';

const img = Router();

img.post('/profile/:idUser', authorizer, multer.single('avatar'), upload);

export default img;
