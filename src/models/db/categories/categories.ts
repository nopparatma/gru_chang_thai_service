import mongoose, { Schema } from "mongoose";
import { ICategories } from "./ICategories";

const collection = "CATEGORIES";

const categoriesSchema: Schema = new Schema(
  {
    categoryId: { type: String, unique: true, required: true },
    seq: { type: Number, required: true },
    image: { type: String, required: true },
    name: {
      th: { type: String, required: true },
      en: { type: String, required: true },
    },
    description: {
      th: { type: String, required: true },
      en: { type: String, required: true },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: collection,
  }
);

export const Categories = mongoose.model<ICategories>(collection, categoriesSchema);
