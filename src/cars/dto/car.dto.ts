import { EngineDto } from "../../engines/dto/engine.dto";

export class CarDto {
  id: string;
  brand: string;
  model: string;
  kilometers: number;
  engine: EngineDto;
  createdAt: Date;
  updatedAt: Date;
}
