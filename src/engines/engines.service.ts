import { injectable } from "tsyringe";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EngineUpdateDto } from "./dto/engine-update.dto";
import { EnginesRepsoitory } from "./enignes.repository";
import { EngineCreateException } from "./exceptions/engine-create.exception";
import { EngineUpdateException } from "./exceptions/engine-update.exception";
import { EngineNotFoundException } from "./exceptions/engone-not-found.exception";
import { Engine } from "./modules/engine.module";
import { isEngine } from "./types/engine.type.guard";

@injectable()
export class EnginesService {
  constructor(private readonly enginesRepository: EnginesRepsoitory) {}

  getById = async (id: string) => {
    const engineSnapshot = await this.enginesRepository.getById(id);
    const engine = engineSnapshot.data();
    if (!isEngine(engine) || !engineSnapshot.exists)
      throw new EngineNotFoundException();

    return new Engine(engine);
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    try {
      return await this.enginesRepository.create(engineCreateDto);
    } catch (error) {
      throw new EngineCreateException();
    }
  };

  update = async (id: string, engineUpdateDto: EngineUpdateDto) => {
    try {
      const engine = await this.getById(id);
      engine.updatedAt = new Date();
      return await this.enginesRepository.update(id, {
        ...engine,
        ...engineUpdateDto,
      });
    } catch (error) {
      throw new EngineUpdateException();
    }
  };
}
