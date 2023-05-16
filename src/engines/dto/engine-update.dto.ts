import { Expose } from "class-transformer";
import { IsDefined, IsNumber, IsOptional, IsString } from "class-validator";

export class EngineUpdateDto {
  @Expose()
  @IsOptional()
  @IsString()
  fuel: string;

  @Expose()
  @IsOptional()
  @IsNumber()
  horsePowers: number;
}
