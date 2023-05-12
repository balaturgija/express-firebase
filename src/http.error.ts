import { ValidationError } from "class-validator";
export class HttpException {
  statusCode: number;
  message: string | ValidationError[] | string[];
  path?: string;

  constructor(
    statusCode: number = 500,
    message: string | ValidationError[] | string[] = "Internal server error"
  ) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
