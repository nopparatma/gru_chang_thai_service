export interface BaseRs {
  status: Status;
  pagination?: Pagination;
}

export interface Status {
  code: string;
  message: string;
}

export interface Pagination {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}
