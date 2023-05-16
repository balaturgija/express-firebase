import { injectable } from "tsyringe";
import { isFirebaseData } from "../firebase/firebase-data.typeguard";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EnginesRepsoitory } from "./enignes.repository";
import { EngineCreateException } from "./exceptions/engine-create.exception";
import { EngineNotFoundException } from "./exceptions/engone-not-found.exception";
import { Engine } from "./modules/engine.module";

@injectable()
export class EnginesService {
  constructor(private readonly enginesRepository: EnginesRepsoitory) {}

  getById = async (id: string) => {
    const engineSnapshot = await this.enginesRepository.getById(id);
    const engineSnapshotData = engineSnapshot.data();
    if (!isFirebaseData(engineSnapshotData))
      throw new EngineNotFoundException();

    return new Engine(engineSnapshotData);
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    try {
      return await this.enginesRepository.create(engineCreateDto);
    } catch (error) {
      throw new EngineCreateException();
    }
  };
}
