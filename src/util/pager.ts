export interface Pager {
  page: number;
  size: number;
}

export class Pager {
  constructor(page: number = 1, size: number = 10) {
    this.page = Number(page);
    this.size = Number(size);
  }

  getOffset = () => (this.page - 1) * this.size;
  getSize = () => Number(this.size);
}
