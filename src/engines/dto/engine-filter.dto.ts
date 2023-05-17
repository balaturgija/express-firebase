import { Expose } from "class-transformer";
import { IsOptional, IsString } from "class-validator";
import { SortDirection } from "../../util/sorter";

export class EngineFilterDto {
  @Expose()
  @IsOptional()
  @IsString()
  searchTerm: string;

  @Expose()
  @IsOptional()
  page: number;

  @Expose()
  @IsOptional()
  rpp: number;

  @Expose()
  @IsString()
  @IsOptional()
  sordBy: string;

  @Expose()
  @IsOptional()
  sortDirection: SortDirection;

  @Expose()
  @IsString()
  @IsOptional()
  include: string;
}
