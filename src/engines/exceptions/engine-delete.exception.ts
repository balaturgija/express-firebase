import { HttpException } from "../../http.error";

export class EngineDeleteException extends HttpException {
  constructor() {
    super(409, "Enigne delete fail");
  }
}
