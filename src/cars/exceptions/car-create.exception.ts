import { HttpException } from "../../http.error";

export class CarCreateException extends HttpException {
  constructor() {
    super(409, "Car create fail");
  }
}
