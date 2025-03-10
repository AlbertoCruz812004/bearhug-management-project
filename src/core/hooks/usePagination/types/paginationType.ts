export interface Paging {
  size: number;
  totalElements: number;
  totalPages: number;
  numberPage: number;
}

export interface ResultPaging<T> {
  data: Array<T>;
  paging: Paging;
  goToPage: (newPage: number) => void;
}

export type FunctionData<T> = (index: number) => Promise<T[]>;

