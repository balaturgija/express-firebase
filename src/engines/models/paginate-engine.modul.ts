import { BasePagination } from "../../util/paginate.model";
import { Engine } from "./engine.modul";

export class PaginateEngine extends BasePagination<Engine> {
  constructor(items: Engine[], currentPage: number, totalPages: number) {
    super(items, currentPage, totalPages);
  }
}
