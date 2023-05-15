import { Expose } from "class-transformer";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class CarUpdateDto {
  @IsOptional()
  @Expose()
  @IsString()
  brand: string;

  @IsOptional()
  @Expose()
  @IsString()
  model: string;

  @IsOptional()
  @Expose()
  @IsUUID()
  @IsString()
  engineId: string;
}
