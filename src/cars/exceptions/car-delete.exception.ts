import { HttpException } from "../../http.error";

export class CarDeleteExceptions extends HttpException {
  constructor() {
    super(409, "Car delete fail");
  }
}
