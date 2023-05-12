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
      throw new HttpException(409, "Car create fail");
    }
  };

  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    try {
      return await this.carsRepository.update(id, carUpdateDto);
    } catch (error) {
      throw new HttpException(409, "Car update fail");
    }
  };

  getById = async (id: string) => {
    try {
      return await this.carsRepository.getById(id);
    } catch (error) {
      throw new HttpException(404, "Car not found");
    }
  };

  delete = async (id: string) => {
    try {
      return await this.carsRepository.delete(id);
    } catch (error) {
      throw new HttpException(409, "Car delete fail");
    }
  };
}
