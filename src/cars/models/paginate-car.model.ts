import { Car } from "./car.model";

export interface PaginateCar {
  items: Car[];
  count: number;
  currentPage: number;
  totalPages: number;
}

export class PaginateCar {
  constructor(items: Car[], currentPage: number, totalPages: number) {
    this.items = items;
    this.count = items.length;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
  }
}
