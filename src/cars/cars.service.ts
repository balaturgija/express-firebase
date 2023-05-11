import { injectable } from "tsyringe";
import { HttpException } from "../http.error";
import { CarsRepository } from "./cars.repository";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarUpdateDto } from "./dto/car-update.dto";

@injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}

  findAll = async () => {
    return await this.carsRepository.findAll();
  };

  create = async (carCreateDto: CarCreateDto) => {
    try {
      return await this.carsRepository.create(carCreateDto);
    } catch (error) {
      throw new HttpException(400, "Car create fail");
    }
  };

  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    return await this.carsRepository.update(id, carUpdateDto);
  };

  getById = async (id: string) => {
    return await this.carsRepository.getById(id);
  };

  delete = async (id: string) => {
    return await this.carsRepository.delete(id);
  };
}
