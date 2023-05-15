export interface Engine {
  id: string;
  fuel: string;
  horsePowers: number;
  createdAt: Date;
  updatedAt: Date | null;
}

export class Engine {
  constructor(data: FirebaseFirestore.DocumentData | undefined) {
    this.id = data.id;
    this.fuel = data.fuel;
    this.horsePowers = data.horsePowers;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = data.updatedAt === null ? null : new Date(data.updatedAt);
  }
}
