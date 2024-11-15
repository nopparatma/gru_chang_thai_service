import express from 'express';
import { getProduct } from '../controllers/productController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/getProduct', authMiddleware, getProduct);

export default router;
