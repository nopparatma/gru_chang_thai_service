import mongoose, { Schema } from "mongoose";
import { IProducts } from "./IProducts";

const collection = "PRODUCTS";

const productSchema: Schema = new Schema(
  {
    categoryId: { type: String, required: true },
    image: { type: String, required: true },
    name: {
      th: { type: String, required: true },
      en: { type: String, required: true },
    },
    description: {
      th: { type: String, required: true },
      en: { type: String, required: true },
    },
    sku: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: collection,
  }
);

export const Product = mongoose.model<IProducts>(collection, productSchema);
