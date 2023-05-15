import { injectable } from "tsyringe";
import { CarsRepository } from "./cars.repository";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarUpdateDto } from "./dto/car-update.dto";
import { CarCreateException } from "./exceptions/car-create.exception";
import { CarDeleteExceptions } from "./exceptions/car-delete.exception";
import { CarNotFoundException } from "./exceptions/car-not-found.exception";
import { CarUpdateException } from "./exceptions/car-update.exception";

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
      throw new CarCreateException();
    }
  };

  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    try {
      return await this.carsRepository.update(id, carUpdateDto);
    } catch (error) {
      throw new CarUpdateException();
    }
  };

  getById = async (id: string) => {
    const carSnapshot = await this.carsRepository.getById(id);
    if (!carSnapshot.exists) throw new CarNotFoundException();
    return carSnapshot;
  };

  delete = async (id: string) => {
    try {
      return await this.carsRepository.delete(id);
    } catch (error) {
      throw new CarDeleteExceptions();
    }
  };
}
