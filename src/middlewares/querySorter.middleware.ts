import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";
import { isSortDefined } from "../util/query.sorter.type.guard";

export const querySorter = (supportedVal: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.sortBy) next();

    const sortBy: string | string[] = JSON.parse(
      JSON.stringify(req.query.sortBy)
    );

    if (Array.isArray(sortBy)) {
      const sortBy = JSON.parse(JSON.stringify(req.query.sortBy));
      const invalidSorters = sortBy.filter(
        (x: any) => !supportedVal.some((s) => s.toLowerCase === x.toLowerCase())
      );

      if (invalidSorters.length > 0) {
        next(new HttpException(400, "Invalid sort values"));
      }
    }

    if (
      isSortDefined(sortBy) &&
      !supportedVal.some((x) => x.toLowerCase() === sortBy.toLowerCase())
    ) {
      next(new HttpException(400, "Invalid sort value"));
    }

    next();
  };
};
