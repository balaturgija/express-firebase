import { BasePagination } from "../../util/paginate.model";
import { Car } from "./car.model";

export class PaginateCar extends BasePagination<Car> {
  constructor(items: Car[], currentPage: number, totalPages: number) {
    super(items, currentPage, totalPages);
  }
}
