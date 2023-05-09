import { inject, container, singleton } from "tsyringe";
import { CarsRepository } from "./cars.repository";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarUpdateDto } from "./dto/car-update.dto";
container.resolve(CarsRepository);
container.register("CarsRepository", CarsRepository);

@singleton()
export class CarsService {
  constructor(
    @inject("CarsRepository") private readonly carsRepository: CarsRepository
  ) {}

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
