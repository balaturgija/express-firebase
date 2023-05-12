import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";
import url from "url";

export const exceptionHandler = (
  err: Error | HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpException) {
    const requestURL = url.format({
      protocol: req.protocol,
      host: req.get("host"),
      pathname: req.originalUrl,
    });
    const timestamp = Date.now();
    return res.status(err.statusCode).send({ ...err, requestURL, timestamp });
  }

  console.log(err);
  return res
    .status(500)
    .send({ statusCode: 500, message: "Internal server error" });
};
