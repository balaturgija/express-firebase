import { HttpException } from "../../http.error";

export class EngineNotFoundException extends HttpException {
  constructor() {
    super(404, "Engine not found");
  }
}
