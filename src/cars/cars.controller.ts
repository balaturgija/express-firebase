import { inject, injectable, container } from "tsyringe";
import { CarsService } from "./cars.service";
import { Request, Response } from "express";

@injectable()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  findAll = async (req: Request, res: Response) => {
    const result = await this.carsService.findAll();
    return res.status(200).send(result);
  };

  create = async (req: Request, res: Response) => {
    const result = await this.carsService.create(req.body);
    return res.status(201).send(result);
  };

  update = async (req: Request, res: Response) => {
    const result = await this.carsService.update(req.params.id, req.body);
    return res.status(201).send(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.carsService.getById(req.params.id);
    return res.status(200).send(result);
  };

  delete = async (req: Request, res: Response) => {
    const result = await this.carsService.getById(req.params.id);
    return res.status(200).send(result);
  };
}
