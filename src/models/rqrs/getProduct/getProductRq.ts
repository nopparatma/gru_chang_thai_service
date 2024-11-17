import { BaseRq } from "../baseRq";

export interface GetProductRq extends BaseRq {
  categoryId: string;
}
