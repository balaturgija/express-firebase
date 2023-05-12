import { injectable } from "tsyringe";
import { HttpException } from "../http.error";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EnginesRepsoitory } from "./enignes.repository";

@injectable()
export class EngineService {
  constructor(private readonly enginesRepository: EnginesRepsoitory) {}

  getById = async (id: string) => {
    try {
      return await this.enginesRepository.getById(id);
    } catch (error) {
      throw new HttpException(404, "Engine not found");
    }
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    try {
      return await this.enginesRepository.create(engineCreateDto);
    } catch (error) {
      throw new HttpException(409, "Engine create fail");
    }
  };
}
