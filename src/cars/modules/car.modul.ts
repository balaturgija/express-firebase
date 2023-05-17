import { Engine } from "../../engines/modules/engine.modul";

export interface Car {
  id: string;
  brand: string;
  model: string;
  kilometers: number;
  engine: Engine;
  createdAt: Date;
  updatedAt: Date | null;
}

export class Car {
  constructor(data: FirebaseFirestore.DocumentData) {
    this.id = data.id;
    this.brand = data.brand;
    this.model = data.model;
    this.kilometers = data.kilometers;
    this.engine = data.engine;
    this.createdAt = data.createdAt.toDate();
    this.updatedAt = data.updatedAt === null ? null : data.updatedAt.toDate();
  }
}
