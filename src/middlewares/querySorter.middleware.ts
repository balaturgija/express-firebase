import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";

export const querySorter = (supportedProps: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.sortBy) next();

    const sortBy = JSON.parse(JSON.stringify(req.query.sortBy));
    if (Array.isArray(sortBy)) {
      const invalidSorters = sortBy.filter(
        (x: any) =>
          !supportedProps.some((s) => s.toLowerCase === x.toLowerCase())
      );

      if (invalidSorters.length > 0) {
        next(new HttpException(400, "Invalid sort values"));
      }
    } else {
      if (
        !supportedProps.some((x) => x.toLowerCase() === sortBy.toLowerCase())
      ) {
        next(new HttpException(400, "Invalid sort value"));
      }
    }

    next();
  };
};
