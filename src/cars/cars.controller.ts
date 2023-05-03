import { injectable } from "tsyringe";
import { CarsService } from "./cars.service";
import { Request, Response } from "express";

@injectable()
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  findAll = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.carsService.findAll();
    return res.status(200).send(result);
  };
}
