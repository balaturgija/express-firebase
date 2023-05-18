import QueryString from "qs";
import { injectable } from "tsyringe";
import { HttpException } from "../http.error";
import { Pager } from "../util/pager";
import { Sorter } from "../util/sorter";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EngineFilterDto } from "./dto/engine-filter.dto";
import { EngineUpdateDto } from "./dto/engine-update.dto";
import { EnginesRepository } from "./enignes.repository";
import { EngineCreateException } from "./exceptions/engine-create.exception";
import { EngineDeleteException } from "./exceptions/engine-delete.exception";
import { EngineUpdateException } from "./exceptions/engine-update.exception";
import { EngineNotFoundException } from "./exceptions/engone-not-found.exception";
import { Engine } from "./modules/engine.modul";
import { PaginateEngine } from "./modules/paginate-engine.modul";
import { isEngine } from "./types/engine.type.guard";

@injectable()
export class EnginesService {
  constructor(private readonly enginesRepository: EnginesRepository) {}

  findAll = async (filter: EngineFilterDto) => {
    const pager = new Pager(filter.page, filter.rpp);
    const sorter = new Sorter(filter.sordBy, filter.sortDirection);

    const result = await this.enginesRepository.findAll(pager, sorter);
    const engines = result.engines!.docs.map((doc) => {
      return new Engine(doc.data());
    });

    return new PaginateEngine(engines, pager.page, result.totalPages);
  };

  getById = async (id: string) => {
    const engineSnapshot = await this.enginesRepository.getById(id);
    const engine = engineSnapshot.data();
    if (!engineSnapshot.exists || !isEngine(engine))
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

  delete = async (id: string) => {
    try {
      return await this.enginesRepository.delete(id);
    } catch (error) {
      throw new EngineDeleteException();
    }
  };
}
