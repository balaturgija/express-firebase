import { HttpException } from "../../http.error";

export class EngineCreateException extends HttpException {
  constructor() {
    super(409, "Enigne create fail");
  }
}
