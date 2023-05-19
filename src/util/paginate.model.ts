export interface BasePagination<T> {
  count: number;
  currentPage: number;
  totalPages: number;
  items: T[];
}

export class BasePagination<T> {
  constructor(items: T[], currentPage: number, totalPages: number) {
    this.count = items.length;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
    this.items = items;
  }
}
