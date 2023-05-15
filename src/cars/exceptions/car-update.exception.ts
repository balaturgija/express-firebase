import { HttpException } from "../../http.error";

export class CarUpdateException extends HttpException {
  constructor() {
    super(409, "Car update fail");
  }
}
