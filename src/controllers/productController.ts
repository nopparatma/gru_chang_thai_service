import { Request, Response } from 'express';
import { Product } from '../models/product/product';

export const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await Product.findOne({ productId: req.body.productId });
    if (!product) {
      res.status(404).send('Product not found');
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
