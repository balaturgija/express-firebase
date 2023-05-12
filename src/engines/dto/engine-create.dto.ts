import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsString } from "class-validator";

export class EngineCreateDto {
  @Expose()
  @IsDefined()
  @IsString()
  fuel: string;

  @Expose()
  @IsDefined()
  @IsNumber()
  horsePowers: number;
}
