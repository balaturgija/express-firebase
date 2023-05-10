import { Expose } from "class-transformer";
import { IsDefined, IsString } from "class-validator";

export class CarCreateDto {
  @Expose()
  @IsDefined()
  @IsString()
  brand: string;

  @Expose()
  @IsDefined()
  @IsString()
  model: string;

  @Expose()
  @IsDefined()
  @IsString()
  engine: string;
}
