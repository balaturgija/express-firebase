import { IsOptional, IsString } from "class-validator";

export class CarUpdateDto {
  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  engine: string;
}
