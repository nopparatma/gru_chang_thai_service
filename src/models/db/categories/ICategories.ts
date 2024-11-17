export interface ICategories {
  categoryId: string;
  seq: number;
  image: string;
  name: {
    th: string;
    en: string;
  };
  description: {
    th: string;
    en: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
