import { NextFunction, Request, Response } from "express";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

export const validateBody = (dtoToValidate: ClassConstructor<unknown>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) next({ statusCode: 400, message: "Model is not defined." });

    const object: any = plainToInstance(dtoToValidate, req.body, {
      excludeExtraneousValues: true,
    });

    const errors: ValidationError[] = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      return next({ statusCode: 400, message: errors });
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
