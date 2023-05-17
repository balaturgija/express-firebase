export interface Pager {
  page: number;
  size: number;
}

export class Pager {
  constructor(page: number = 1, size: number = 10) {
    this.page = page;
    this.size = size;
  }

  getOffset = () => (this.page - 1) * this.size;
  getSize = () => Number(this.size);
}
