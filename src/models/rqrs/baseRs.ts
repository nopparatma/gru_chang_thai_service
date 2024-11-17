export interface BaseRs {
  status: Status;
  pagination?: Pagination;
}

export interface Status {
  code: number;
  message: string;
}

export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}
