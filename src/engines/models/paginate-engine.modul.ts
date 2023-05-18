import { Engine } from "./engine.modul";

export interface PaginateEngine {
  items: Engine[];
  count: number;
  currentPage: number;
  totalPages: number;
}

export class PaginateEngine {
  constructor(items: Engine[], currentPage: number, totalPages: number) {
    this.items = items;
    this.count = items.length;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
  }
}
