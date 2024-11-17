import express from 'express';
import { getProduct, getCategories } from '../controllers/productController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/getProduct', authMiddleware, getProduct);
router.post('/getCategories', authMiddleware, getCategories);

export default router;
