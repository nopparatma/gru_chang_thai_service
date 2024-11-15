import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "./IProduct";

const productSchema: Schema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
});

export const Product = mongoose.model<IProduct>("Product", productSchema);
