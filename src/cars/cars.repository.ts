import { CarCreateDto } from "./dto/car-create.dto";
import { v4 } from "uuid";
import { CarUpdateDto } from "./dto/car-update.dto";
import { db } from "../firebase/database";
import { injectable } from "tsyringe";
import { Pager } from "../util/pager";
import { Sorter } from "../util/sorter";

@injectable()
export class CarsRepository {
  private dbRef = db.collection("cars");

  findAll = async (pager: Pager, sorter: Sorter) => {
    const collectionSnapshot = await this.dbRef.get();
    const cars = await collectionSnapshot.query
      .offset(pager.getOffset())
      .limit(pager.getSize())
      .orderBy(sorter.orderBy, sorter.sortBy)
      .get();

    return {
      cars,
      totalPages: Math.ceil(collectionSnapshot.size / pager.getSize()),
    };
  };

  getById = async (id: string) => {
    return await this.dbRef.doc(id).get();
  };

  create = async (carCreateDto: CarCreateDto) => {
    const carCreate = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: null,
      ...carCreateDto,
    };
    await this.dbRef.doc(carCreate.id).set(carCreate);
    return carCreate;
  };

  update = async (id: string, carUpdateDto: CarUpdateDto) => {
    await this.dbRef.doc(id).update({ ...carUpdateDto });
    return {
      ...carUpdateDto,
    };
  };

  delete = async (id: string) => {
    await this.dbRef.doc(id).delete();
  };
}
