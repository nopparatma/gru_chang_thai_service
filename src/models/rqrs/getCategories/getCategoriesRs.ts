import { BaseRs } from "../baseRs";

export interface GetCategoriesRs extends BaseRs {
  data: DataCategoriesRs;
}

export interface DataCategoriesRs {
  categories: CategoriesRs[];
}

export interface CategoriesRs {
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
  seq: number;
  createdAt?: Date;
  updatedAt?: Date;
}
