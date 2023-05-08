import { inject, container, singleton } from "tsyringe";
import { CarsRepository } from "./cars.repository";
import { CarCreateDto } from "./dto/car-create.dto";
container.resolve(CarsRepository);

@singleton()
export class CarsService {
  constructor(
    @inject("CarsRepository") private readonly carsRepository: CarsRepository
  ) {}
  async findAll() {
    return await this.carsRepository.findAll();
  }

  async create(carCreateDto: CarCreateDto) {
    return await this.carsRepository.save(carCreateDto);
  }
}
