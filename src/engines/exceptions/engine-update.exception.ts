import { HttpException } from "../../http.error";

export class EngineUpdateException extends HttpException {
  constructor() {
    super(409, "Enigne update fail");
  }
}
