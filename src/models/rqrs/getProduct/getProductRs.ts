import { BaseRs } from "../baseRs";

export interface GetProductRs extends BaseRs {
  data: DataProductRs;
}

export interface DataProductRs {
  products: ProductRs[];
}

export interface ProductRs {
  categoryId: String;
  image: String;
  name: {
    th: String;
    en: String;
  };
  description: {
    th: String;
    en: String;
  };
  sku: String;
  createdAt?: Date;
  updatedAt?: Date;
}
