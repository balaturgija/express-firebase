import { injectable } from "tsyringe";
import { db } from "../firebase/database";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { v4 } from "uuid";
import { EngineUpdateDto } from "./dto/engine-update.dto";
import { Pager } from "../util/pager";
import { Sorter } from "../util/sorter";

@injectable()
export class EnginesRepository {
  private dbRef = db.collection("engines");

  findAll = async (pager: Pager, sorter: Sorter) => {
    const collectionSnapshot = await this.dbRef.get();
    const engines = await collectionSnapshot.query
      .offset(pager.getOffset())
      .limit(pager.getSize())
      .orderBy(sorter.orderBy, sorter.sortBy)
      .get();

    return {
      engines,
      totalPages: Math.ceil(collectionSnapshot.size / pager.getSize()),
    };
  };

  getById = async (id: string) => {
    return await this.dbRef.doc(id).get();
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    const engineCreate = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: null,
      ...engineCreateDto,
    };
    await this.dbRef.doc(engineCreate.id).set(engineCreate);
    return engineCreate;
  };

  update = async (id: string, engineUpdateDto: EngineUpdateDto) => {
    await this.dbRef.doc(id).update({ ...engineUpdateDto });
    return {
      ...engineUpdateDto,
    };
  };

  delete = async (id: string) => {
    return await this.dbRef.doc(id).delete();
  };
}
