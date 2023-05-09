import { CarCreateDto } from "./dto/car-create.dto";
import { v4 } from "uuid";
import { CarUpdateDto } from "./dto/car-update.dto";
import { db } from "../database";

export class CarsRepository {
  dbRef = db.collection("cars");

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
    try {
      const id = v4();
      const carCreate = {
        id: id,
        ...carCreateDto,
      };
      await this.dbRef.doc(id).set(carCreate);
      return carCreate;
    } catch (error) {
      console.log(error);
    }
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
