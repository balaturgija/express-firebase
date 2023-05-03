import { injectable } from "tsyringe";

@injectable()
export class CarsService {
  async findAll() {
    return ["hello"];
  }
}
