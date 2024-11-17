export interface BaseRq {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
}
