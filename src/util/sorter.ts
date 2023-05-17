export type SortDirection = "asc" | "desc";

export interface Sorter {
  orderBy: string;
  sortBy: SortDirection;
}

export class Sorter {
  constructor(orderBy: string = "id", sortBy: SortDirection = "asc") {
    this.orderBy = orderBy;
    this.sortBy = sortBy;
  }
}
