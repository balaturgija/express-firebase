import { HttpException } from "../../http.error";

export class CarNotFoundException extends HttpException {
  constructor() {
    super(404, "Car not found");
  }
}
