import { IsDefined, IsString } from "class-validator";

export class CarCreateDto {
  @IsDefined()
  @IsString()
  brand: string;

  @IsDefined()
  @IsString()
  model: string;

  @IsDefined()
  @IsString()
  engine: string;
}
