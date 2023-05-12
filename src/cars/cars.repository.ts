import { CarCreateDto } from "./dto/car-create.dto";
import { v4 } from "uuid";
import { CarUpdateDto } from "./dto/car-update.dto";
import { db } from "../database";
import { injectable } from "tsyringe";

@injectable()
export class CarsRepository {
  private dbRef = db.collection("cars");

  findAll = async () => {
    try {
      return await this.dbRef.get();
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id: string) => {
    return this.dbRef.doc(id).get();
  };

  create = async (carCreateDto: CarCreateDto) => {
    const id = v4();
    const carCreate = {
      id: id,
      ...carCreateDto,
    };
    await this.dbRef.doc(id).set(carCreate);
    return carCreate;
  };

  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    await db
      .collection("cars")
      .doc(id)
      .update({ ...carUpdateDto });
    return {
      id,
      ...carUpdateDto,
    };
  };

  delete = async (id: string) => {
    await this.dbRef.doc(id).delete();
  };
}
