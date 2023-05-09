import { CarCreateDto } from "./dto/car-create.dto";
import { v4 } from "uuid";
import { CarUpdateDto } from "./dto/car-update.dto";
import { db } from "../main";

export class CarsRepository {
  findAll = async () => {
    try {
      return await db.collection("cars").get();
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id: string) => {
    return db.collection("cars").doc(id).get();
  };

  create = async (carCreateDto: CarCreateDto) => {
    try {
      const id = v4();
      const carCreate = {
        id: id,
        ...carCreateDto,
      };
      await db.collection("cars").doc(id).set(carCreate);
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
    await db.collection("cars").doc(id).delete();
  };
}
