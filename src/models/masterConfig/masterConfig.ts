import mongoose, { Schema } from "mongoose";
import { IMasterConfig } from "./IMasterConfig";

const collection = "MASTER_CONFIG";
const masterConfigSchema: Schema = new Schema(
  {
    KEY: { type: String, required: true },
    DATA: { type: String, required: true },
    NAME: { type: String, required: true },
    STATUS: { type: String, required: true },
  },
  {
    collection: collection,
  }
);

export const MasterConfig = mongoose.model<IMasterConfig>(
  collection,
  masterConfigSchema
);
