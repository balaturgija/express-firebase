import { Expose, Type } from "class-transformer";
import { IsInt, IsOptional, IsString } from "class-validator";
import { SortDirection } from "../../util/sorter";

export class EngineFilterDto {
  @Expose()
  @IsOptional()
  @IsString()
  searchTerm: string;

  @Expose()
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  page: number;

  @Expose()
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  rpp: number;

  @Expose()
  @IsString()
  @IsOptional()
  sordBy: string;

  @Expose()
  @IsOptional()
  sortDirection: SortDirection;
}
