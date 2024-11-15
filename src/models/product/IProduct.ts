import { Document } from "mongoose";

export interface IProduct extends Document {
  productId: string;
  name: string;
}
