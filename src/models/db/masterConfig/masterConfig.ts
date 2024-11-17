import mongoose, { Schema } from "mongoose";
import { IMasterConfig } from "./IMasterConfig";

const collection = "MASTER_CONFIG";
const masterConfigSchema: Schema = new Schema(
  {
    key: { type: String, required: true },
    data: { type: String, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    collection: collection,
  }
);

export const MasterConfig = mongoose.model<IMasterConfig>(
  collection,
  masterConfigSchema
);
