import { injectable } from "tsyringe";
import { db } from "../firebase/database";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { v4 } from "uuid";
import { EngineUpdateDto } from "./dto/engine-update.dto";

@injectable()
export class EnginesRepsoitory {
  private dbRef = db.collection("engines");

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
    const result = await this.dbRef.doc(id).update({ ...engineUpdateDto });
    return {
      ...engineUpdateDto,
    };
  };
}
