import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";

export const exceptionHandler = (
  err: Error | HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err instanceof HttpException ? err.statusCode : 500;
  const message =
    err instanceof HttpException ? err.message : "Internal server error";
  res.status(statusCode).send({ statusCode, message });
};
