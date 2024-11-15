import express from 'express';
import { getMasterConfig } from '../controllers/masterController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/getMasterConfig', authMiddleware, getMasterConfig);

export default router;
