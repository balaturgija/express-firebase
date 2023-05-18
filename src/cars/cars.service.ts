import { injectable } from "tsyringe";
import { Pager } from "../util/pager";
import { Sorter } from "../util/sorter";
import { CarsRepository } from "./cars.repository";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarFilterDto } from "./dto/car-filter.dto";
import { CarUpdateDto } from "./dto/car-update.dto";
import { CarCreateException } from "./exceptions/car-create.exception";
import { CarDeleteExceptions } from "./exceptions/car-delete.exception";
import { CarNotFoundException } from "./exceptions/car-not-found.exception";
import { CarUpdateException } from "./exceptions/car-update.exception";
import { Car } from "./models/car.model";
import { PaginateCar } from "./models/paginate-car.model";
import { isCar } from "./types/car.type.guard";

@injectable()
export class CarsService {
  constructor(private readonly carsRepository: CarsRepository) {}

  findAll = async (filter: CarFilterDto) => {
    const pager = new Pager(filter.page, filter.rpp);
    const sorter = new Sorter(filter.sordBy, filter.sortDirection);
    const result = await this.carsRepository.findAll(pager, sorter);
    const cars = result.cars.docs.map((doc) => {
      return new Car(doc.data());
    });

    return new PaginateCar(cars, pager.page, result.totalPages);
  };

  getById = async (id: string) => {
    const carSnapshot = await this.carsRepository.getById(id);
    const car = carSnapshot.data();
    if (!carSnapshot.exists || !isCar(car)) throw new CarNotFoundException();
    return new Car(car);
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
      const car = await this.getById(id);
      car.updatedAt = new Date();
      return await this.carsRepository.update(id, {
        ...car,
        ...carUpdateDto,
      });
    } catch (error) {
      throw new CarUpdateException();
    }
  };

  delete = async (id: string) => {
    try {
      return await this.carsRepository.delete(id);
    } catch (error) {
      throw new CarDeleteExceptions();
    }
  };
}
