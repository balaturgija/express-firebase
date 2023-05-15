import { injectable } from "tsyringe";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EnginesRepsoitory } from "./enignes.repository";
import { EngineNotFoundException } from "./exceptions/engone-not-found.exception";
import { Engine } from "./modules/engine.module";

@injectable()
export class EnginesService {
  constructor(private readonly enginesRepository: EnginesRepsoitory) {}

  getById = async (id: string) => {
    const engineSnapshot = await this.enginesRepository.getById(id);
    if (!engineSnapshot.exists) throw new EngineNotFoundException();
    const result = engineSnapshot.data();
    return new Engine(result);
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    try {
      return await this.enginesRepository.create(engineCreateDto);
    } catch (error) {
      throw new EngineNotFoundException();
    }
  };
}
