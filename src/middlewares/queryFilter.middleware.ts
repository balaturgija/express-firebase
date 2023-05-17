import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http.error";

export const queryFilter = (filterDtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const filter: any = plainToClass(filterDtoClass, req.query, {
      excludeExtraneousValues: true,
    });
    let errors = await validate(filter, { skipMissingProperties: true });
    if (errors.length > 0)
      next(
        new HttpException(
          400,
          errors.map((x) => Object.values(x.constraints!).join())
        )
      );

    next();
  };
};
