import { Router } from 'express';

import authRoutes from './auth.route';
import groupRoutes from './groups.route';
import pageRoutes from './pages.route';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/users');
router.use('/api/groups', groupRoutes);
router.use('/api/pages', pageRoutes);
