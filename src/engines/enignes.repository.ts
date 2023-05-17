import { injectable } from "tsyringe";
import { db } from "../firebase/database";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { v4 } from "uuid";
import { EngineUpdateDto } from "./dto/engine-update.dto";
import { Pager } from "../util/pager";
import { Sorter } from "../util/sorter";
import { Engine } from "./modules/engine.modul";

@injectable()
export class EnginesRepository {
  private dbRef = db.collection("engines");

  findAll = async (pager: Pager, sorter: Sorter) => {
    const result = await this.dbRef
      .offset(pager.getOffset())
      .limit(pager.getSize())
      .orderBy(sorter.orderBy, sorter.sortBy)
      .get();

    return result.docs.map((doc) => {
      return new Engine(doc.data());
    });
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
