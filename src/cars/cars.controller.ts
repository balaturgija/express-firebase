import { injectable } from "tsyringe";
import { CarsService } from "./cars.service";
import { NextFunction, Request, Response } from "express";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarFilterDto } from "./dto/car-filter.dto";

@injectable()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  findAll = async (req: Request, res: Response) => {
    const filter: CarFilterDto = JSON.parse(JSON.stringify(req.query));
    const result = await this.carsService.findAll(filter);
    return res.status(200).send(result);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.carsService.create(req.body);
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.carsService.getById(req.params.id);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.carsService.update(req.params.id, req.body);
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const car = await this.carsService.getById(req.params.id);
      const result = await this.carsService.getById(car.id);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };
}
