import { Router } from 'express';

import auhtRoutes from '../services/auth/auth.route';
import userRoutes from '../services/users/users.route';
import pageRoutes from '../services/pages/pages.route';
import groupRoutes from '../services/groups/groups.route';
import imageRoutes from '../services/images/images.route';

const routes = Router();

routes.use('/api/auth', auhtRoutes);
routes.use('/api/user', userRoutes);
routes.use('/api/group', groupRoutes);
routes.use('/api/page', pageRoutes);
routes.use('/api/images', imageRoutes);

export default routes;
