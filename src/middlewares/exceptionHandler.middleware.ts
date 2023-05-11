import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";

export const exceptionHandler = (
  err: Error | HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    return res.status(err.statusCode).send(err);
  }

  console.log(err);
  return res
    .status(500)
    .send({ statusCode: 500, message: "Internal server error" });
};
