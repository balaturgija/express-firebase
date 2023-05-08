import { CarCreateDto } from "./dto/car-create.dto";
import { v4 } from "uuid";
import { CarUpdateDto } from "./dto/car-update.dto";
import { db } from "../main";

export class CarsRepository {
  docRef = db.collection("cars");
  findAll = async () => {
    return this.docRef.get();
  };
  getById = async (id: string) => {
    return this.docRef.doc(id).get();
  };
  save = async (carCreateDto: CarCreateDto) => {
    const id = v4();
    const carCreate = {
      id: id,
      carCreateDto,
    };
    await this.docRef.doc(id).set(carCreate);
    return carCreate;
  };
  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    await this.docRef.doc(id).update({ ...carUpdateDto });
    return {
      id,
      carUpdateDto,
    };
  };
  delete = async (id: string) => {
    await this.docRef.doc(id).delete();
  };
}
