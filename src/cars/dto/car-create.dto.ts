import { Expose } from "class-transformer";
import { IsDefined, IsString, IsUUID } from "class-validator";

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
  @IsUUID()
  @IsString()
  engineId: string;
}
