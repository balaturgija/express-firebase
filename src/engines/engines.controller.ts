import { NextFunction, Request, Response } from "express";
import { injectable } from "tsyringe";
import { EngineFilterDto } from "./dto/engine-filter.dto";
import { EnginesService } from "./engines.service";

@injectable()
export class EnginesController {
  constructor(private readonly enginesService: EnginesService) {}

  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.enginesService.findAll(req.query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

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

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.enginesService.delete(req.params.id);
      return res.status(200);
    } catch (error) {
      next(error);
    }
  };
}
