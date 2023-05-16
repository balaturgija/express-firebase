import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { EnginesService } from "./engines.service";

@injectable()
export class EnginesController {
  constructor(private readonly enginesService: EnginesService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.enginesService.create(req.body);
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.enginesService.getById(req.params.id);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.enginesService.update(req.params.id, req.body);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
}
