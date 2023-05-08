import { inject, injectable, container } from "tsyringe";
import { CarsService } from "./cars.service";
import { Request, Response } from "express";
container.resolve(CarsService);
@injectable()
export class CarsController {
  constructor(@inject(CarsService) private readonly carsService: CarsService) {}

  findAll = async (req: Request, res: Response) => {
    const result = await this.carsService.findAll();
    return res.status(200).send(result);
  };

  createCollection = async (req: Request, res: Response) => {};
}
