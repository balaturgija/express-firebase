import { injectable } from "tsyringe";
import { db } from "../database";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { v4 } from "uuid";

@injectable()
export class EnginesRepsoitory {
  dbRef = db.collection("engines");

  getById = async (id: string) => {
    return this.dbRef.doc(id).get();
  };

  create = async (engineCreateDto: EngineCreateDto) => {
    const id = v4();
    const engineCreate = {
      id,
      ...engineCreateDto,
    };
    await this.dbRef.doc(id).set(engineCreate);
    return engineCreate;
  };
}
