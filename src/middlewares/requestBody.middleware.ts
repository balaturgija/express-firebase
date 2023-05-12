import { NextFunction, Request, Response } from "express";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { HttpException } from "../filter/http.exception";

export const validateBody = (dtoToValidate: ClassConstructor<unknown>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) next(new HttpException(400, "Model is not defined"));

    const object: any = await plainToInstance(dtoToValidate, req.body, {
      excludeExtraneousValues: true,
    });

    const errors: ValidationError[] = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      const errorMap = buildErrors(errors);
      return next(new HttpException(400, errorMap));
    }

    next();
  };
};

const buildErrors = (errors: ValidationError[]) => {
  const errStr: string[] = [];
  errors.map((err) => {
    if (err.children && err.children.length > 0) {
      errStr.push(...buildErrors(err.children));
    } else {
      errStr.push(...Object.values(err.constraints!));
    }
  });
  return errStr;
};
