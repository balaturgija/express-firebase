import { injectable } from "tsyringe";
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
    return await this.carsRepository.create(carCreateDto);
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
