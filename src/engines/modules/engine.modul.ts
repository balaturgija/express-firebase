export interface Engine {
  id: string;
  fuel: string;
  horsePowers: number;
  createdAt: Date;
  updatedAt: Date | null;
}

export class Engine {
  constructor(data: FirebaseFirestore.DocumentData) {
    this.id = data.id;
    this.fuel = data.fuel;
    this.horsePowers = data.horsePowers;
    this.createdAt = data.createdAt.toDate();
    this.updatedAt = data.updatedAt === null ? null : data.updatedAt.toDate();
  }
}
