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
    return db.doc(id).get();
  };
  save = async (carCreateDto: CarCreateDto) => {
    const id = v4();
    const carCreate = {
      id: id,
      carCreateDto,
    };
    await db.doc(id).set(carCreate);
    return carCreate;
  };
  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    await db.doc(id).update({ ...carUpdateDto });
    return {
      id,
      carUpdateDto,
    };
  };
  delete = async (id: string) => {
    await db.doc(id).delete();
  };
}
