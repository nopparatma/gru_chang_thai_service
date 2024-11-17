export interface IProducts {
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
  createdAt: Date;
  updatedAt: Date;
}
